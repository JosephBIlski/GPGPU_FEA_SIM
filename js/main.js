"use strict"
import $ from 'jquery';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// declare renderer
const canvas = $("#c")[0];
const bodyEle = $("body")[0];
const script = $("#cubeFS")[0];
bodyEle.innerHTML = `<div>${script.textContent}</div>`
// const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
// renderer.setSize( window.innerWidth/3, window.innerHeight/3, false );

// // create scene and camera
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
// //adjust camera position
// camera.position.z = 5;

// // create cube geometry
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// // const material = new THREE.MeshPhongMaterial({color: 0x44aa88}); 
// // const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );
// function makeInstance(geometry, color, x) {
//     const material = new THREE.MeshPhongMaterial({color});
   
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
   
//     cube.position.x = x;
   
//     return cube;
//   }

// const cubes = [
//     makeInstance(geometry, 0x11a34E, -2),
//     makeInstance(geometry, 0x1100FE, 0),
//     makeInstance(geometry, 0x00a23E, 2),
// ];

// // create light
// const color = 0xFFFFFF;
// const intensity = 3;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);

// // adjust camera on resize
// function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width/3, height/3, false);
//     }
//     return needResize;
//   }

// // render loop
// function render(time) {
//     time *= 0.001;  // convert time to seconds
   
//     // spin cubes
//     cubes.forEach((cube, idx) => {
//         cube.rotation.x = time*idx + idx*3;
//         cube.rotation.y = time*idx + idx;
//     })
   
//     // update camera
//     if (resizeRendererToDisplaySize(renderer)) {
//         const canvas = renderer.domElement;
//         camera.aspect = canvas.clientWidth / canvas.clientHeight;
//         camera.updateProjectionMatrix();
//     }

//     // render
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   }
//   requestAnimationFrame(render);
