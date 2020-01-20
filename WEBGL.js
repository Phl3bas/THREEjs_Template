import * as THREE from "three";

export default class WEBGL {
  constructor(container) {
    this.THREE = THREE;
    this.container = container;
    this._initRenderer();
    this._initCamera();
    this._initScene();
    this._initRaycaster();
    this._initClock();
    this.run = this.run.bind(this);
  }

  _initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight,
      false
    );
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

    //shadows
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.append(this.renderer.domElement);
  }
  _initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.container.offsetWidth / this.container.offsetHeight,
      0.1,
      10000
    );
  }
  _initScene() {
    this.scene = new THREE.Scene();
  }
  _initRaycaster() {
    this.raycaster = new THREE.Raycaster();
  }
  _initClock() {
    this.clock = new THREE.Clock();
  }

  run() {
    const delta = this.clock.getDelta();
    this.render(delta);
    this.update(delta);
    requestAnimationFrame(this.run);
  }

  init() {}

  update() {}

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
