"use strict"
import $ from 'jquery';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
/*
** Plan for simple FEA sim **
#version 300 es

STARTING WITH 2D BEAM ELEMENTS BECAUSE THEY'RE EASIER RAHHH

- take in list of beam elements

- put connectivity matrix in a texture

- list of external forces
    - updated as a dynamic uniform array

- list of boundary conditions
    - also a dynamic uniform array

- For each node, get connectivity

- acceleration texture
    - figure out what node you are
    - iterate over connectivity matrix row
        - for each non-zero entry,
            - get distance and normal vector
            - add to total force
    - add external forces
    - update acceleration

- velocity texture

- position texture


STL FORMATTING PLANNING:
need to be able to tell vertex shader which node they are based on index

current pattern: 0, 1, 1, 2, 2, 0, then everything plus one
node # = math.floor(ind/6) + pattern[ind % 6];

TEXTURES:
- Force on node texture
- fixed or not texture
- texture of positions (comp shader)
- texture of velocities (comp shader)
- connectivity texture (which nodes are connected to which)

SHADERS:
- position computation shader
- velocity computation shader
- 
*/

const loader = new OBJLoader();

class LineGeom extends THREE.BufferGeometry {

    constructor(nodeCoordinates) {
        super();

        const points = nodeCoordinates.length;

        // cube verticies
        const vertices = new THREE.BufferAttribute(new Float32Array(nodeCoordinates), 3);

        // reference for which vertex we're on (normalized)
        // const references = new THREE.BufferAttribute(new Float32Array(points * 2), 2);

        // reference for which face of the cube we're on
        // const cubeFace = new THREE.BufferAttribute(new Float32Array(points), 1);

        this.setAttribute('position', vertices);
        // this.setAttribute('reference', references);
        // this.setAttribute('cubeFace', cubeFace);

        // console.log(cubeFace.array);
        this.scale(.5,.5,.5);
    }
}
// window events
window.addEventListener( 'resize', onWindowResize );
// stop computation when unfocused, restart it when the user clicks in again
window.addEventListener('blur', unbindRenderLoop);
window.addEventListener('focus', bindRenderLoop);

// let stats = new Stats();
const canvas = $("#c")[0];
// Camera
const camera = new THREE.PerspectiveCamera(75, 2, 0.01, 1000);
camera.lookAt(new THREE.Vector3(0,0,0));
camera.position.set( 0, 0, 5 );
// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setAnimationLoop(animate);
// Controls
const controls = new OrbitControls( camera, renderer.domElement );
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa6a8ab);
// scene.fog = new THREE.Fog( 0xffffff, 100, 1000 );

let stlTriCoordinates = [];
// console.log(nodeCoordinates);
// global variables
let last = performance.now();
let gpuCompute;
let cubeUniforms;
let positionVariable;
let positionUniforms;
let nodeCoordinates = [];
let width;

// load bunny
loader.load(
    '/bunny.obj',
    function (geometry) {
        const bunnyMat = new THREE.MeshBasicMaterial({color: "#0377fc"})
        bunnyMat.wireframe = true;
        const mesh = new THREE.Mesh(geometry, bunnyMat);
        // scene.add(mesh);

        // get vertices in world coordinates
        const position = mesh.geometry.attributes.position;
        // console.log(mesh);
        // console.log(mesh.geometry);
        // console.log(mesh.geometry.attributes);
        // console.log(position);
        for (let i = 0; i < position.count; i++) {
            let vector = new THREE.Vector3();
            vector.fromBufferAttribute(position, i);
            vector.applyMatrix4(mesh.matrixWorld);
            stlTriCoordinates.push(vector);
        }
        initNodeCoords();
        // const modelPosWorld = position.map((x) => {position.matrixWorld})
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

gpuCompute = new GPUComputationRenderer(width, width, renderer);

initLines(nodeCoordinates);
initComp();

function initNodeCoords() {
    // remake geometry so that it can be drawn as lines
    for (let i = 0; i < stlTriCoordinates.length; i +=3) {
        nodeCoordinates.push(stlTriCoordinates[i]);
        nodeCoordinates.push(stlTriCoordinates[i + 1]);

        nodeCoordinates.push(stlTriCoordinates[i + 1]);
        nodeCoordinates.push(stlTriCoordinates[i + 2]);

        nodeCoordinates.push(stlTriCoordinates[i + 2]);
        nodeCoordinates.push(stlTriCoordinates[i]);
    }
    // number of nodes is number of unique vertices
    // can number nodes according to 
    // current pattern: 0, 1, 1, 2, 2, 0, then everything plus one
    // node # = math.floor(ind/6) + pattern[ind % 6];
    var uniquePts = Array.from(new Set(nodeCoordinates));
    const geometry = new THREE.BufferGeometry().setFromPoints(nodeCoordinates);
    const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const mesh = new THREE.LineSegments( geometry, material );
    scene.add(mesh);
}

// set up cube geometry with cube class and material
function initLines(nodeCoordinates) {

    const geometry = new LineGeom(nodeCoordinates);
    // for Cube Vertex and Fragment Shaders
    cubeUniforms = {
        'texturePosition': { value: null },
        'time': { value: 1.0 },
        'delta': { value: 0.0 }
    };

    // shader for material
    const material = new THREE.ShaderMaterial({
        uniforms: cubeUniforms,
        vertexShader: document.getElementById('cubeVS').textContent,
        fragmentShader: document.getElementById('cubeFS').textContent,
        side: THREE.DoubleSide,
        glslVersion: THREE.GLSL3,
    })

    const cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.matrixAutoUpdate = false;
    cubeMesh.updateMatrix();

    scene.add(cubeMesh);

}

function initCubes() {

    const geometry = new CubeGeom;
    // for Cube Vertex and Fragment Shaders
    cubeUniforms = {
        'texturePosition': { value: null },
        'time': { value: 1.0 },
        'delta': { value: 0.0 }
    };

    // shader for material
    const material = new THREE.ShaderMaterial({
        uniforms: cubeUniforms,
        vertexShader: document.getElementById('cubeVS').textContent,
        fragmentShader: document.getElementById('cubeFS').textContent,
        side: THREE.DoubleSide,
    })

    const cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.matrixAutoUpdate = false;
    cubeMesh.updateMatrix();

    scene.add(cubeMesh);

}

function initComp() {
    const dtPosition = gpuCompute.createTexture();

    fillPositionTexture(dtPosition);

    positionVariable = gpuCompute.addVariable('texturePosition', document.getElementById('fragmentShaderPosition').textContent, dtPosition);

    gpuCompute.setVariableDependencies(positionVariable, [positionVariable]);

    // get position uniforms and set them
    positionUniforms = positionVariable.material.uniforms;
    positionUniforms['time'] = { value: 0.0 };
    positionUniforms['delta'] = { value: 0.0 };

    const error = gpuCompute.init();

    if (error !== null) {

        console.error(error);

    }

}

function fillPositionTexture(texture) {

    const inputArray = texture.image.data;

    for (let k = 0; k < inputArray.length; k += 4) {

        const x = (Math.random() - 1.)*5.;
        const y = (Math.random() - 1.)*5.;
        const z = (Math.random() - 1.)*5.;

        inputArray[k + 0] = x;
        inputArray[k + 1] = y;
        inputArray[k + 2] = z;
        inputArray[k + 3] = 1;
    }
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight, false );

}

function unbindRenderLoop() {
    renderer.setAnimationLoop(null);
}

function bindRenderLoop() {
    renderer.setAnimationLoop(animate);
}

function animate() {

    render();
    // stats.update();

}

function render() {

    const now = performance.now();
    let delta = ( now - last ) / 1000;

    if ( delta > 1 ) delta = 1; // safety cap on large deltas
    last = now;

    // update time deltas in the cube shader and the texture shader
    positionUniforms[ 'time' ].value = now;
    positionUniforms[ 'delta' ].value = delta;
    cubeUniforms[ 'time' ].value = now;
    cubeUniforms[ 'delta' ].value = delta;

    // compute on the texture
    gpuCompute.compute();

    // set the position texture in the cubes
    cubeUniforms[ 'texturePosition' ].value = gpuCompute.getCurrentRenderTarget( positionVariable ).texture;

    controls.update();

    renderer.render( scene, camera );

}
