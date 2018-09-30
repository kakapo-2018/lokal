import React, { Component } from "react";
import * as THREE from "three";
import OBJLoader from "../../client/three/OBJLoader";

class Experience extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    this.camera.position.z = 3;
    this.camera.position.y = 30;
    this.camera.position.x = 30;
    var point = new THREE.Vector3(0, 0, 0);
    this.camera.lookAt(point);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD LIGHTING
    var light = new THREE.PointLight(0xeb5605, 1, 100);
    light.position.set(50, 70, 80);
    this.scene.add(light);
    var lumy = new THREE.PointLight(0xff9797, 1, 100);
    light.position.set(45, 0, 50);
    this.scene.add(lumy);
    var ambient = new THREE.AmbientLight(0xeb5605, 0.2);
    this.scene.add(ambient);

    //ADD TANIWHA
    var loader = new THREE.OBJLoader();

    loader.load("../../public/Taniwha.obj", function(testObject) {
      scene.add(testObject);
      testObject.scale.x = 1;
      testObject.scale.y = 1;
      testObject.scale.z = 1;
      testObject.position.x = 0;
      testObject.position.y = 0;
      testObject.position.z = 0;
      testObject.rotation.x = 0;
      var animate = function() {
        requestAnimationFrame(animate);
        testObject.rotation.x += 0;
        testObject.rotation.y += 0;
        testObject.rotation.z += 0.0004;
      };
      animate();
    });

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(7, 29, 22);
    const material = new THREE.MeshBasicMaterial({ color: "#952e46" });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (
      <div>
        <div className="container mainpage">
          <hr />
          <h1>Experience</h1>

          <div
            style={{ width: "700px", height: "700px" }}
            ref={mount => {
              this.mount = mount;
            }}
          />
          <hr />
        </div>
      </div>
    );
  }
}
export default Experience;
