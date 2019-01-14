import * as THREE from 'three';
import { deepDispose } from '@/utils/deep-dispose';
import OrbitControls from 'orbit-controls-es6';
import GLTFLoader from 'three-gltf-loader';

export default class Room3D {
  constructor(canvas, container) {
    this.canvas = canvas;
    this.container = container;

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

    this.gltfLoader = new GLTFLoader();

    this.setup();
    this.tick();
    this.handleResize();

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;
  }

  loadRoom() {
    this.gltfLoader.load('/models/big_room/scene.gltf', (gltf) => {
      this.scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error(error);
    });
  }

  destroy() {
    this.running = false;
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
    this.scene.add(cube);

    this.camera.position.z = 5;
    this.camera.position.x = 1000;
    this.camera.position.y = -1;
  }

  tick() {
    if (!this.running) return;
    requestAnimationFrame(() => this.tick());
    // const time = performance.now();
    // this.animation.update(time * 0.007);
    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    const { width, height } = this.container.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
