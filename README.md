# THREEjs_Template

This is a Base THREEjs class I created to make initialising a Three project much quicker.

WEBGL.js automatically sets and creates defaults for...

1. renderer (with Antialias and alpha enabled)

```javascript 
new THREE.WebGLRenderer({ antialias: true, alpha: true });
setClearColor(0x000000, 0);
setPixelRatio(Math.min(2, window.devicePixelRatio));
shadowMap.enabled = true;
shadowMap.type = THREE.PCFSoftShadowMap;
container.append(this.renderer.domElement);
    
```
2. scene (basic)
```javascript 
new THREE.Scene()
```
3. camera (PerspectiveCamera with fov, nearDraw and farDraw properties)
```javascript 
fov = 45
nearDraw = 0.1
farDraw = 1000

new THREE.PerspectiveCamera(
      fov,
      this.container.offsetWidth / this.container.offsetHeight,
      nearDraw,
      farDraw
    );
```
4. raycaster (basic)
```javascript
  new THREE.Raycaster();

```


5. clock (basic)

```javascript
  new THREE.Clock();
```

## es6 classes? should you use prototypes?

I like the class syntax! ¬_¬ so sue me... i plan to update this to use typescript and its proper implementation of classes in the future.

## How do I use this stupid class then?

download WEBGL.js into a lib folder (until i decide to upload this to npm you have to do it the old fashioned way im afraid!)

and import it

```javascript
// App.js
import WEBGL from "./lib/WEBGL";
```

create base "App" `class` to extend `WEBGL.js`
with constructor taking in a "container" param and pass it to super

```javascript
// App.js

export default class App extends WEBGL {
  constructor(container) {
    super(container);
  }
 }
 ```
 
 in an index.js file `import` your `App` class and initalise 
 with a container reference (DOM element you wish to inject webgl scene into).
 
 initilise app and call the run method.
 
 ```javascript
 // index.js
 
 import App from "./App";

const ctx = document.querySelector("#app");
const app = new App(ctx);

app.run();
 
 ```
 
 
 ## What does app.run() do under the hood??
 
 its just a basic preconfigured RAF loop, which gets the delta time from the built in clock and passes it to update. so its up to you to 
 override the update function and make use of the delta time.
 
 ```javascript
  //  WEBGL.js
 
   run() {
    const delta = this.clock.getDelta();
    this._render(delta);
    this.update(delta);
    requestAnimationFrame(this.run);
  }

  update() {}

  _render() {
    this.renderer.render(this.scene, this.camera);
  }
  
  ```
 
 ## What if i dont want to use one of your stupid default!! ¬_¬
 
 in your extended instance feel free to overdrive any init methods which run under the hood to include your own init logic and configs
 
 ```javascript
 // App.js
 
 initRenderer()
 initCamera()
 initRaycaster()
 initScene()
 initClock()
 
 ```
 
 ## is there a crappy example of this in action I can look at?
 
 https://codesandbox.io/s/threejs-world-g63uz
 
 
 
 
 
 
