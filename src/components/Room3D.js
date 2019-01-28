/* eslint-disable */
import { deepDispose } from '@/utils/deep-dispose';

export default class Room3D {
  constructor(canvas, container) {
    this.canvas = canvas;
    this.container = container;
    this.mouse = new THREE.Vector2();
    this.intersected = null;
    this.clicked = false;
    this.draggingCamera = false;

    this.depthMaterial =  new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
    this.depthTarget = new THREE.WebGLRenderTarget(width, height);

    const { width, height } = canvas;

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    this.camera.lookAt(this.scene.position);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      stencil: false,
      alpha: !true,
    });
    this.renderer.gammaOutput = true;
    this.renderer.setClearColor(0x303030, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.running = true;

    this.composer = new THREE.EffectComposer( this.renderer );
    var renderPass = new THREE.RenderPass( this.scene, this.camera );
    this.composer.addPass( renderPass );

    this.outlinePass = new THREE.OutlinePass( new THREE.Vector2(width, height), this.scene, this.camera );
    this.outlinePass.edgeStrength = 6.0
    this.outlinePass.edgeThickness = 1.0
    this.outlinePass.visibleEdgeColor.set('#ffffff')
    this.outlinePass.hiddenEdgeColor.set('#ffffff')

    // this.outlinePass.renderToScreen = true;
    this.composer.addPass( this.outlinePass );

    this.effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );
		this.effectFXAA.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );
		this.effectFXAA.renderToScreen = true;
		this.composer.addPass( this.effectFXAA );

    this.gltfLoader = new THREE.GLTFLoader();
    this.raycaster = new THREE.Raycaster();
    this.canvas.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
    this.canvas.addEventListener( 'mousedown', this.onMouseDown.bind(this) );
    this.canvas.addEventListener( 'click', this.onClickHandler.bind(this) );

    this.setup();
    this.tick();
    this.handleResize();

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxDistance = 1500;

    this._getDepth = (() => {
      const rgbaBuffer = new Uint8Array(4);
      const v4 = new THREE.Vector4();

      const unpackDownscale = 255 / 256;
      const unpackFactors = new THREE.Vector4(
          unpackDownscale / (256 * 256 * 256),
          unpackDownscale / (256 * 256),
          unpackDownscale / 256,
          unpackDownscale
      );

      function unpackRGBAToDepth(buffer) {
        return v4.fromArray(buffer).multiplyScalar(1 / 255).dot(unpackFactors);
      }

      function unpackDepth(
          rgbaBuffer,
          cameraNear,
          cameraFar,
          logarithmicDepthBuffer = false
      ) {
        if (!logarithmicDepthBuffer) {
          return unpackRGBAToDepth(rgbaBuffer);
        }

        const logDepthBufFC = 2.0 / (Math.log(cameraFar + 1.0) / Math.LN2);
        const logz = unpackRGBAToDepth(rgbaBuffer);
        const w = Math.pow(2.0, logz / logDepthBufFC) - 1.0;

        return logz / w + 1.0;
      }

      return (x, y) => {
        this.renderer.readRenderTargetPixels(this.depthTarget, x, y, 1, 1, rgbaBuffer);

        return unpackDepth(
            rgbaBuffer,
            this.camera.near,
            this.camera.far,
            this.renderer.capabilities.logarithmicDepthBuffer
        );
      };
    })();

    this._setPositionFromViewZ = (() => {
      const projInv = new THREE.Matrix4();

      return (viewZ, x, y) => {
        const position = new THREE.Vector3();
        projInv.getInverse(this.camera.projectionMatrix);
        position
            .set(
                x / (this.canvas.width / window.devicePixelRatio) * 2 - 1,
                -(y / (this.canvas.height / window.devicePixelRatio)) * 2 + 1,
                0.5
            )
            .applyMatrix4(projInv);

        position.multiplyScalar(viewZ / position.z);
        position.applyMatrix4(this.camera.matrixWorld);

        return position
      };
    }) ()
  }

  loadRoom() {
    return new Promise((resolve, reject) => {
      this.gltfLoader.load('/bug-busters/models/saal/Saal8.gltf', (gltf) => {
        // gltf.scene.traverse( function( node ) {
        //   if(node.isMesh) {
        //     node.castShadow = true;
        //     node.receiveShadow = true;
        //   }
        // } );
        this.scene.add(gltf.scene);
        resolve();
      }, undefined, (error) => {
        console.error(error);
        reject(error);
      });
    });
  }

  destroy() {
    this.running = false;
    this.canvas.removeEventListener('mousemove', this.onDocumentMouseMove.bind(this));
    this.canvas.removeEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.removeEventListener('click', this.onClickHandler.bind(this));
    while (this.scene.children.length > 0) {
      const object = this.scene.children[this.scene.children.length - 1];
      deepDispose(object);
      this.scene.remove(object);
    }
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer.context = undefined;
    this.renderer.domElement = undefined;
    // until next garbage collection
    this.canvas.width = 1;
    this.canvas.height = 1;
  }

  setup() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    // this.scene.add(cube);

    var light = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
    this.scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
    this.scene.add( directionalLight );

    var light2 = new THREE.PointLight( 0xffffff, 0.8, 500 );
    light2.position.set( 3, 7, 5 );
    this.scene.add( light2 );
    //var sphereSize = 1;
    //var pointLightHelper = new THREE.PointLightHelper( light2, sphereSize );
    //this.scene.add( pointLightHelper );

    const light3 = new THREE.DirectionalLight(0xffffff, 0.5);
    light3.position.set(-5, 10, 10);
    this.scene.add(light3);
    //var light3helper = new THREE.DirectionalLightHelper( light3, 5 );
    //this.scene.add( light3helper );

    this.camera.position.z = -9;
    this.camera.position.x = -12;
    this.camera.position.y = 12;
  }

  tick() {
    if (!this.running) return;
    requestAnimationFrame(() => this.tick());
    this.render();
    if(this.onRenderCallback) {
      this.onRenderCallback();
    }
    // const time = performance.now();
    // this.animation.update(time * 0.007);
    this.scene.overrideMaterial = this.depthMaterial;
    this.renderer.render(this.scene, this.camera, this.depthTarget);
    this.scene.overrideMaterial = null;

    this.composer.render();
    //this.renderer.render(this.scene, this.camera);
  }

  render() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);

    if (intersects.length > 0) {
      var selectedObject = intersects[ 0 ].object;
      this.intersected = selectedObject
      this.intersected.point = intersects[0].point

      this.outlinePass.selectedObjects = [selectedObject];
    } else {
      this.outlinePass.selectedObjects = [];
      this.intersected = null
    }
  }

  handleResize() {
    const { width, height } = this.container.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.setSize(width, height);
    this.depthTarget.setSize(width, height);
    this.composer.setSize( width, height );
		this.effectFXAA.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse.x = ((event.offsetX - this.renderer.domElement.offsetLeft) / this.renderer.domElement.width) * 2 - 1;
    this.mouse.y = -((event.offsetY - this.renderer.domElement.offsetTop) / this.renderer.domElement.height) * 2 + 1;

    if(this.clicked) this.draggingCamera = true
  }

  onMouseDown() {
    this.clicked = true
  }

  onClickHandler(event) {
    if(!this.draggingCamera) {
      if(this.onClickCallback && this.intersected) {
        this.onClickCallback(this.intersected);
      }
    }
    this.draggingCamera = false
    this.clicked = false
  }

  onClick(func) {
    this.onClickCallback = func;
  }

  onRender(func) {
    this.onRenderCallback = func;
  }

  onCameraChange(func) {
    this.controls.addEventListener('change', () => func());
  }

  perspectiveDepthToViewZ(invClipZ, near, far) {
    return (near * far) / ((far - near) * invClipZ - far);
  }

  get3dPoint(x, y) {
    const depth = this._getDepth(x, this.canvas.height - y);
    const viewZ = this.perspectiveDepthToViewZ(depth, this.camera.near, this.camera.far);

    // setPositionFromDepth(depth, cursor.position);
    return this._setPositionFromViewZ(viewZ, x, y);
  }
}
