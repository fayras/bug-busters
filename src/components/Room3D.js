/* eslint-disable */
import { deepDispose } from '@/utils/deep-dispose';

export default class Room3D {
  constructor(canvas, container) {
    this.canvas = canvas;
    this.container = container;
    this.mouse = new THREE.Vector2();
    this.intersected = null;

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
    this.renderer.setClearColor(0x303030, 1);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.running = true;

    this.gltfLoader = new THREE.GLTFLoader();
    this.raycaster = new THREE.Raycaster();
    this.canvas.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
    this.canvas.addEventListener( 'click', this.onClickHandler.bind(this) );

    this.setup();
    this.tick();
    this.handleResize();

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxDistance = 1500;
  }

  loadRoom() {
    this.gltfLoader.load('/models/saal/Saal.gltf', (gltf) => {
      this.scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });
  }

  destroy() {
    this.running = false;
    this.canvas.removeEventListener('mousemove', this.onDocumentMouseMove.bind(this));
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

    var light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
    this.scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    this.scene.add( directionalLight );

    this.camera.position.z = 20;
    this.camera.position.x = 0;
    this.camera.position.y = 0;
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
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (intersects.length > 0) {
      if (this.intersected) this.intersected.point = intersects[0].point
      if (this.intersected != intersects[0].object) {
        if (this.intersected) this.intersected.material.emissive.setHex(this.intersected.currentHex);
        this.intersected = intersects[0].object;
        this.intersected.currentHex = this.intersected.material.emissive.getHex();
        this.intersected.material.emissive.setHex(0xff0000);
      }
    } else {
      if (this.intersected) this.intersected.material.emissive.setHex(this.intersected.currentHex);
      this.intersected = null;
    }
  }

  handleResize() {
    const { width, height } = this.container.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    this.mouse.x = ((event.offsetX - this.renderer.domElement.offsetLeft) / this.renderer.domElement.width) * 2 - 1;
    this.mouse.y = -((event.offsetY - this.renderer.domElement.offsetTop) / this.renderer.domElement.height) * 2 + 1;
  }

  onClickHandler(event) {
    if(this.onClickCallback && this.intersected) {
      this.onClickCallback(this.intersected);
    }
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
}
