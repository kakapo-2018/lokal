import React, { Component } from "react";
import * as THREE from "three";
import "../three/OBJLoader";
import { getStory } from "../actions/index";
import { connect } from "react-redux";
import { log } from "core-js";


class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: "/Error.obj",
      objBackGroundImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcmzzllx_PgP7tJOkVWnULrbRKDad3MqEwA5IZ_YV39wI2vg-"
    };
  }

  componentDidMount() {
    this.renderModel();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.iwiStory.image != nextProps.iwiStory.image) {
      this.removeAnimation();
      this.renderModel();
    }
  }

  renderModel() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    const { iwiStory } = this.props;
    let image = iwiStory.objBackGroundImg;
    let obj = iwiStory.obj;
    //ADD SCENE

    this.scene = new THREE.Scene();

    this.scene.background = new THREE.TextureLoader().load(`${image}`);
    this.scene.backgroundSphere = true;

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);

    this.camera.position.z = -25;
    this.camera.position.y = 0;
    this.camera.position.x = 0;
    var point = new THREE.Vector3(0, 0, 0);
    this.camera.lookAt(point);

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
    const thisScene = this.scene;

    loader.load(`${obj || this.state.obj}`, function(testObject) {
      thisScene.add(testObject);
      testObject.scale.x = 1;
      testObject.scale.y = 1;
      testObject.scale.z = 1;
      testObject.position.x = 0;
      testObject.position.y = 0;
      testObject.position.z = 0;
      testObject.rotation.x = 90;
      testObject.rotation.y = 0;
      testObject.rotation.z = 0;
      var animate = function() {
        requestAnimationFrame(animate);
        testObject.rotation.x += 0;
        testObject.rotation.y += 0;
        testObject.rotation.z += 0.02;
      };
      animate();
    });

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#952e46" });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
  }
  componentWillUnmount() {
    this.removeAnimation();
  }
  removeAnimation() {
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
    cancelAnimationFrame;
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
            style={{ width: "100%", height: "500px" }}
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

function mapStateToProps(state) {
  return {
    iwiStory: state.iwiStory
  };
}

export default connect(mapStateToProps)(Experience);