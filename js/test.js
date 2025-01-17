"use strict"
import $ from 'jquery';
import * as THREE from 'three';
import { GUI } from 'lil-gui';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

/* TODO: 
- auto calc delta
- add simple GUI
    - create function that doesn't hard refresh the scene, also a reset button?
    - sliders for parameters
    - togglable gravity
- Drag Nodes
- more stable forward integration (newmark?)
- Select to fix/unfix nodes(?)
- Refactor...
*/

/*
OVERVIEW FOR DRAG-NODES -- look at https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html
- raycaster and pointer
- raycaster can assemble list of intersected objects 
    ?-- use this to set a uniform vec4, x is draggedNode in terms of uv, rest are coords where it should be set
    ?-- could make invis spheres at each point (in order of nodes), turn on when intersected and use to get which point is being dragged

*/
const loader = new OBJLoader();

let lastTime = 0;
let stats = new Stats();
document.body.appendChild(stats.dom)

// Controls
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x89adf5);
scene.fog = new THREE.Fog(0xcccccc, 10, 15);
console.log(THREE.REVISION)

// global variables

let globals = initGlobals();

function initGlobals() {
    return {
        camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10000),
        canvas: $("#c")[0],
        renderer: null,
        controls: null,
        last: performance.now(),
        ticks: 10,
        timeDiff: null,
        gpuCompute: null,
        cubeUniforms: null,
        positionVariable: null,
        velocityVariable: null,
        accelerationVariable: null,
        positionUniforms: null,
        velocityUniforms: null,
        accelerationUniforms: null,
        lineUniforms: null,
        nodeCoordinates: [],
        vertCoordinates: [],
        triIndexes: [],
        lineIndexes: [],
        initLen: [],
        nodeNum: null,
        width: null,
        height: 1,
        extForce: null,
        fixedNodes: null,
        mass: 50,
        damping: 50,
        dampingRatio: null,
        maxNatFreq: null,
        EA: 100,
        time: 0,
        delta: 1E-4,
        freq: null,
        fVertCoords: null,
        epsFromBot: .01,
        loadedObj: null,
        fileName: './bunny_scaled.obj',
        fileName: './bunny_scaled.obj',
        resetSim: null,
        gui: null,
        floorAtY0: true,
        dampingScale: 2, // default is 2
        gravity: -6.,
        pointerPos: [0, 0],
        pointerClicked: null,
        maxTextSize: null,
    }
}


function initRenderer() {
    globals.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: globals.canvas });
    globals.renderer.setSize(window.innerWidth, window.innerHeight, false);
    globals.renderer.render(scene, globals.camera);
    // console.log(globals.renderer.capabilities)
    const gl = globals.renderer.getContext();
    globals.maxTextSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    console.log("Max texture size:", globals.maxTextSize);
}

function initControls() {
    globals.controls = new OrbitControls(globals.camera, globals.renderer.domElement);
}

// GUI
// initGUI();

initSim(globals.fileName);

// load bunny
function initSim(fileName) {
    clearScene(scene)
    globals = initGlobals();
    globals.fileName = fileName;
    initRenderer();
    initControls();
    // const axesHelper = new THREE.AxesHelper(5.);
    // scene.add(axesHelper);
    const floorPlane = new THREE.PlaneGeometry(50, 50);
    floorPlane.rotateX(-Math.PI * 0.5);
    const floorMat = new THREE.MeshBasicMaterial({ color: 0xebebeb });
    const floorMesh = new THREE.Mesh(floorPlane, floorMat);
    scene.add(floorMesh);
    loader.load(
        globals.fileName,
        function (object) {
            // const bunnyMat = new THREE.MeshBasicMaterial({color: "#0377fc"})
            // bunnyMat.wireframe = true;
            // const mesh = new THREE.Mesh(geometry, bunnyMat);
            // scene.add(object)
            object.traverse(function (node) {
                if (node.isMesh) {
                    let tmpGeo = node.geometry;
                    // tmpGeo.scale(scale);
                    if (tmpGeo.attributes.normal) {
                        delete tmpGeo.attributes.normal;
                    }
                    if (tmpGeo.attributes.uv) {
                        delete tmpGeo.attributes.uv;
                    }
                    let idxedBufferGeom = BufferGeometryUtils.mergeVertices(tmpGeo, 1E-10);
                    globals.vertCoordinates = tmpGeo.attributes.position.array;
                    globals.nodeCoordinates = idxedBufferGeom.attributes.position.array;
                    globals.triIndexes = idxedBufferGeom.index.array;
                }
            });
            globals.nodeNum = globals.nodeCoordinates.length / 3;
            console.log(globals.nodeNum)
            globals.width = globals.nodeCoordinates.length / 3 / globals.height;
            globals.widthPow2 = nextPowOfTwo(globals.width);
            initLineCoords();
            fitCameraToObject(globals);
            initComp();
            globals.renderer.setAnimationLoop(animate);
            setWindowEvents();
            initGUI();
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

}

function initGUI() {
    globals.gui = new GUI;
    let fileC = globals.gui.add(globals, 'fileName', ['./cube.obj', './bunny_scaled.obj', './teapot.obj']);
    fileC.onFinishChange(value => {
        globals.renderer.setAnimationLoop(null);
        globals.gui.close();
        initSim(value);
    });
    fileC.name("Load File")

    let eaC = globals.gui.add(globals, 'EA', 1, 100, 1);
    eaC.onFinishChange(() => {
        globals.accelerationUniforms['EA'] = { value: globals.EA };
        globals.accelerationUniforms['m'] = { value: globals.mass / globals.nodeNum };
        // update dependent uniform values
        globals.maxNatFreq = Math.sqrt(globals.EA / (globals.mass / globals.nodeNum));
        // globals.delta = Math.sqrt(1/(2*Math.PI*globals.maxNatFreq));
        globals.damping = 2 * globals.dampingRatio * Math.sqrt(globals.mass / globals.nodeNum * globals.EA);
        globals.accelerationUniforms['c'] = { value: globals.damping };
    });
    eaC.name("Young's Modulus * CrossSec Area")

    let mC = globals.gui.add(globals, 'mass', 1, 100, 1);
    mC.onFinishChange(() => {
        globals.accelerationUniforms['EA'] = { value: globals.EA };
        globals.accelerationUniforms['m'] = { value: globals.mass / globals.nodeNum };
        // update dependent uniform values
        globals.maxNatFreq = Math.sqrt(globals.EA / (globals.mass / globals.nodeNum));
        // globals.delta = Math.sqrt(1/(2*Math.PI*globals.maxNatFreq));
        globals.damping = 2 * globals.dampingRatio * Math.sqrt(globals.mass / globals.nodeNum * globals.EA);
        globals.accelerationUniforms['c'] = { value: globals.damping };
    });
    mC.name("Total mass of system");

    let floorC = globals.gui.add(globals, 'floorAtY0');
    floorC.onFinishChange(() => {
        globals.velocityUniforms['floorOn'] = { value: globals.floorAtY0 };
        globals.accelerationUniforms['floorOn'] = { value: globals.floorAtY0 };
        globals.positionUniforms['floorOn'] = { value: globals.floorAtY0 };
    });
    floorC.name("Enable Solid Floor");

    let dampC = globals.gui.add(globals, 'dampingScale', 0, 2, .25);
    dampC.onFinishChange(() => {
        globals.maxNatFreq = Math.sqrt(globals.EA / (globals.mass / globals.nodeNum));
        globals.damping = globals.dampingScale * globals.dampingRatio * Math.sqrt(globals.mass / globals.nodeNum * globals.EA);
        globals.accelerationUniforms['c'] = { value: globals.damping };
    });
    dampC.name("Damping Factor")

    globals.gui.add(globals, 'ticks', 1, 1000, 10).name("Updates Per Frame");
    globals.gui.add(globals, 'delta', [1E-5, 1E-4, 1E-3]).name("Simulation deltaT");
    globals.resetSim = resetSim;
    globals.gui.add(globals, 'resetSim').name("Reset Simulation");
}

function resetSim() {
    globals.renderer.setAnimationLoop(null);
    initComp();
    globals.renderer.setAnimationLoop(animate);
}

const fitCameraToObject = function (globals) {

    const boundingBox = new THREE.Box3();

    // get bounding box of object - this will be used to setup controls and camera
    boundingBox.setFromObject(globals.loadedObj);
    let center = new THREE.Vector3;
    boundingBox.getCenter(center);
    let size = new THREE.Vector3;
    boundingBox.getSize(size);

    // get the max side of the bounding box (fits to width OR height as needed )
    const maxDim = Math.max(size.x, size.y, size.z);

    globals.camera.position.z = globals.loadedObj.position.z + maxDim;
    globals.camera.position.y = globals.loadedObj.position.y + maxDim;
    globals.camera.position.x = globals.loadedObj.position.x + maxDim;

    const minZ = boundingBox.min.z;
    // const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

    // camera.far = cameraToFarEdge * 3;
    globals.camera.updateProjectionMatrix();
    globals.camera.lookAt(center)
    globals.controls.target = center;
    // console.log(center)

}

function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    globals.pointerPos[0] = (event.clientX / window.innerWidth) * 2 - 1;
    globals.pointerPos[1] = - (event.clientY / window.innerHeight) * 2 + 1;

}

function onPointerDown(event) {
    globals.pointerClicked = true;
}

function onPointerUp(event) {
    globals.pointerClicked = false;
}

// Clear function from https://stackoverflow.com/questions/30359830/how-do-i-clear-three-js-scene
function clearScene(obj) {
    while (obj.children.length > 0) {
        clearScene(obj.children[0]);
        obj.remove(obj.children[0]);
    }
    if (obj.geometry) obj.geometry.dispose();

    if (obj.material) {
        //in case of map, bumpMap, normalMap, envMap ...
        Object.keys(obj.material).forEach(prop => {
            if (!obj.material[prop])
                return;
            if (obj.material[prop] !== null && typeof obj.material[prop].dispose === 'function')
                obj.material[prop].dispose();
        })
        obj.material.dispose();
    }
}

function setWindowEvents() {
    window.addEventListener('resize', onWindowResize);
    // stop computation when unfocused, restart it when the user clicks in again
    window.addEventListener('blur', unbindRenderLoop);
    window.addEventListener('focus', bindRenderLoop);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
}

function initLineCoords() {
    // remake geometry so that it can be drawn as lines
    for (let i = 0; i < globals.triIndexes.length; i += 3) {
        globals.lineIndexes.push(globals.triIndexes[i]);
        globals.lineIndexes.push(globals.triIndexes[i + 1]);

        globals.lineIndexes.push(globals.triIndexes[i + 1]);
        globals.lineIndexes.push(globals.triIndexes[i + 2]);

        globals.lineIndexes.push(globals.triIndexes[i + 2]);
        globals.lineIndexes.push(globals.triIndexes[i]);
    }

    // reference for position texture
    let uv = [];
    let uvOther = [];

    for (let i = 0; i < globals.lineIndexes.length; i++) {
        let x = (globals.lineIndexes[i] % globals.widthPow2) / globals.widthPow2;
        let y = Math.trunc(globals.lineIndexes[i] / globals.widthPow2) / globals.height;

        uv.push(x);
        uv.push(y);

        if (i % 2 == 0) {
            let x = (globals.lineIndexes[i + 1] % globals.widthPow2) / globals.widthPow2;
            let y = Math.trunc(globals.lineIndexes[i + 1] / globals.widthPow2) / globals.height;
            uvOther.push(x);
            uvOther.push(y);
        } else {
            let x = (globals.lineIndexes[i - 1] % globals.widthPow2) / globals.widthPow2;
            let y = Math.trunc(globals.lineIndexes[i - 1] / globals.widthPow2) / globals.height;
            uvOther.push(x);
            uvOther.push(y);
        }
    }

    for (let i = 0; i < globals.lineIndexes.length; i += 2) {
        let l1x = globals.nodeCoordinates[3 * globals.lineIndexes[i]];
        let l1y = globals.nodeCoordinates[3 * globals.lineIndexes[i] + 1];
        let l1z = globals.nodeCoordinates[3 * globals.lineIndexes[i] + 2];

        let l2x = globals.nodeCoordinates[3 * globals.lineIndexes[i + 1]];
        let l2y = globals.nodeCoordinates[3 * globals.lineIndexes[i + 1] + 1];
        let l2z = globals.nodeCoordinates[3 * globals.lineIndexes[i + 1] + 2];
        const ele1 = new THREE.Vector3(l1x, l1y, l1z);
        const ele2 = new THREE.Vector3(l2x, l2y, l2z);
        const d = ele1.distanceTo(ele2);

        globals.initLen.push(d);
        globals.initLen.push(d);
    }

    let lineVertCoords = [];

    for (let i = 0; i < globals.lineIndexes.length; i++) {
        let l1x = globals.nodeCoordinates[3 * globals.lineIndexes[i]];
        let l1y = globals.nodeCoordinates[3 * globals.lineIndexes[i] + 1];
        let l1z = globals.nodeCoordinates[3 * globals.lineIndexes[i] + 2];

        lineVertCoords.push(l1x);
        lineVertCoords.push(l1y);
        lineVertCoords.push(l1z);
    }

    globals.fVertCoords = new Float32Array(lineVertCoords);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(globals.fVertCoords, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uv), 2));
    geometry.setAttribute('initLen', new THREE.BufferAttribute(new Float32Array(globals.initLen), 1));
    geometry.setAttribute('uvOther', new THREE.BufferAttribute(new Float32Array(uvOther), 2));
    geometry.setAttribute('index', new THREE.Uint32BufferAttribute(globals.lineIndexes, 1));

    globals.lineUniforms = {
        'texturePosition': { value: null },
        'textureVelocity': { value: null },
        'textureAcceleration': { value: null },
        'time': { value: 0.0 },
    };

    // shader for material
    const material = new THREE.ShaderMaterial({
        uniforms: globals.lineUniforms,
        vertexShader: document.getElementById('lineVS').textContent,
        fragmentShader: document.getElementById('lineFS').textContent,
        //side: THREE.DoubleSide,
        glslVersion: THREE.GLSL3,
    });

    const mesh = new THREE.LineSegments(geometry, material);
    globals.loadedObj = mesh;
    scene.add(mesh);
}

function initComp() {
    globals.gpuCompute = new GPUComputationRenderer(globals.widthPow2, globals.height, globals.renderer);
    
    // There is a much better implementation of this possible w/ sparse matrix storage
    const connectivityTexture = new THREE.DataTexture(
        new Float32Array(globals.widthPow2 * globals.widthPow2),
        globals.widthPow2,
        globals.widthPow2,
        THREE.RedFormat,
        THREE.FloatType
    );

    const initLenTexture = new THREE.DataTexture(
        new Float32Array(globals.widthPow2),
        globals.widthPow2,
        1,
        THREE.RedFormat,
        THREE.FloatType
    );

    const initPosTexture = new THREE.DataTexture(
        new Float32Array(globals.widthPow2 * 4),
        globals.widthPow2,
        1,
        THREE.RGBAFormat,
        THREE.FloatType
    );

    const fixedTexture = new THREE.DataTexture(
        new Float32Array(globals.widthPow2),
        globals.widthPow2,
        1,
        THREE.RedFormat,
        THREE.FloatType
    );

    const extForceTexture = new THREE.DataTexture(
        new Float32Array(globals.widthPow2 * 4),
        globals.widthPow2,
        1,
        THREE.RGBAFormat,
        THREE.FloatType
    );

    const accelerationTex = globals.gpuCompute.createTexture();
    const velocityTex = globals.gpuCompute.createTexture();
    const positionTex = globals.gpuCompute.createTexture();

    fillInitLenTexture(initLenTexture);
    fillPositionTexture(initPosTexture, new Float32Array(globals.nodeCoordinates))
    fillPositionTexture(positionTex, new Float32Array(globals.nodeCoordinates));
    fillZerosTexture(velocityTex);
    fillZerosTexture(accelerationTex);

    fillConnectivityTexture(connectivityTexture, globals.lineIndexes, globals.widthPow2);
    // fillFixedTexture2(fixedTexture);
    fillZerosTexture(fixedTexture);
    fillExtForceTexture(extForceTexture);

    globals.positionVariable = globals.gpuCompute.addVariable('texturePosition', document.getElementById('fragmentShaderPosition').textContent, positionTex);
    globals.velocityVariable = globals.gpuCompute.addVariable('textureVelocity', document.getElementById('fragmentShaderVelocity').textContent, velocityTex);
    globals.accelerationVariable = globals.gpuCompute.addVariable('textureAcceleration', document.getElementById('fragmentShaderAcceleration').textContent, accelerationTex);

    globals.gpuCompute.setVariableDependencies(globals.positionVariable, [globals.positionVariable, globals.velocityVariable, globals.accelerationVariable]);
    globals.gpuCompute.setVariableDependencies(globals.velocityVariable, [globals.velocityVariable, globals.accelerationVariable, globals.positionVariable]);
    globals.gpuCompute.setVariableDependencies(globals.accelerationVariable, [globals.accelerationVariable, globals.positionVariable, globals.velocityVariable]);

    //set other global params

    globals.maxNatFreq = Math.sqrt(globals.EA / (globals.mass / globals.nodeNum));
    // globals.delta = Math.sqrt(1/(2*Math.PI*globals.maxNatFreq));
    globals.dampingRatio = .5;
    globals.damping = globals.dampingScale * globals.dampingRatio * Math.sqrt(globals.mass / globals.nodeNum * globals.EA);

    // get position uniforms and set them
    globals.positionUniforms = globals.positionVariable.material.uniforms;
    globals.positionUniforms['time'] = { value: 0.0 };
    globals.positionUniforms['delta'] = { value: 0.0 };
    globals.positionUniforms['fixedTexture'] = { value: fixedTexture };
    globals.positionUniforms['prevVel'] = { value: null };
    globals.positionUniforms['prevAccel'] = { value: null };
    globals.positionUniforms['floorOn'] = { value: globals.floorAtY0 };
    globals.positionUniforms['pointerClicked'] = { value: globals.pointerClicked };
    globals.positionUniforms['pointerCoords'] = { value: globals.pointerPos };

    globals.velocityUniforms = globals.velocityVariable.material.uniforms;
    globals.velocityUniforms['time'] = { value: 0.0 };
    globals.velocityUniforms['delta'] = { value: 0.0 };
    globals.velocityUniforms['extForceTexture'] = { value: extForceTexture };
    globals.velocityUniforms['floorOn'] = { value: globals.floorAtY0 };
    globals.velocityUniforms['prevAccel'] = { value: null };

    globals.accelerationUniforms = globals.accelerationVariable.material.uniforms;
    globals.accelerationUniforms['time'] = { value: 0.0 };
    globals.accelerationUniforms['delta'] = { value: 0.0 };
    globals.accelerationUniforms['textelSize'] = { value: 1. / globals.widthPow2 };
    globals.accelerationUniforms['connectivityTexture'] = { value: connectivityTexture };
    globals.accelerationUniforms['nodeCount'] = { value: globals.nodeNum };
    globals.accelerationUniforms['extForceTexture'] = { value: extForceTexture };
    globals.accelerationUniforms['initLenTexture'] = { value: initLenTexture };
    globals.accelerationUniforms['initPosTexture'] = { value: initPosTexture };
    globals.accelerationUniforms['EA'] = { value: globals.EA };
    globals.accelerationUniforms['c'] = { value: globals.damping };
    globals.accelerationUniforms['m'] = { value: globals.mass / globals.nodeNum };
    globals.accelerationUniforms['floorOn'] = { value: globals.floorAtY0 };

    const error = globals.gpuCompute.init();

    if (error !== null) {

        console.error(error);

    }

}

function fillConnectivityTexture(texture, lineIndexes, rowWidth) {

    const inputArray = texture.image.data;
    inputArray.fill(0.);

    let node1;
    let node2;
    for (let k = 0; k < lineIndexes.length; k += 2) {

        node1 = lineIndexes[k];
        node2 = lineIndexes[k + 1];
        inputArray[(node1 * rowWidth) + node2] = 1;
        inputArray[(node2 * rowWidth) + node1] = 1;
    }
    texture.needsUpdate = true;
}

function fillPositionTexture(texture, nodeCoordinates) {

    let inputArray = texture.image.data;
    inputArray.fill(0);
    let i = 0;
    for (let k = 0; k < nodeCoordinates.length; k += 3) {

        const x = nodeCoordinates[k];
        const y = nodeCoordinates[k + 1];
        const z = nodeCoordinates[k + 2];

        inputArray[k + i] = x;
        inputArray[k + 1 + i] = y;
        inputArray[k + 2 + i] = z;
        inputArray[k + 3 + i] = 1;
        i++;
    }
    texture.needsUpdate = true;
}

function fillInitLenTexture(texture) {
    let inputArray = texture.image.data;
    inputArray.fill(0);

    for (let i = 0; i < globals.initLen.length; i++) {
        inputArray[i] = globals.initLen[i];
    }
    texture.needsUpdate = true;
}

function fillExtForceTexture(texture) {
    let inputArray = texture.image.data;
    inputArray.fill(0);

    for (let i = 0; i < globals.nodeNum; i++) {
        inputArray[4*i + 1] = globals.gravity * globals.mass / globals.nodeNum;
    }
    texture.needsUpdate = true;

}

function fillFixedTexture2(texture) {
    let inputArray = texture.image.data;
    let minUp = 99999;
    let maxUp = -99999;

    for (let i = 1; i < globals.nodeCoordinates.length; i += 3) {
        if (globals.nodeCoordinates[i] < minUp) {
            minUp = globals.nodeCoordinates[i];
        }
        if (globals.nodeCoordinates[i] > maxUp) {
            maxUp = globals.nodeCoordinates[i];
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (globals.nodeCoordinates[3 * i + 1] <= minUp + globals.epsFromBot)
            inputArray[i] = 1.;
        else
            inputArray[i] = 0.;
    }
    texture.needsUpdate = true;
}

function fillFixedTexture(texture) {
    let inputArray = texture.image.data;
    for (let i = 0; i < inputArray.length; i++) {
        if (i % 4 == 0)
            inputArray[i] = 1.;
        else
            inputArray[i] = 0.;
    }
    texture.needsUpdate = true;
}

function fillZerosTexture(texture) {

    const inputArray = texture.image.data;

    inputArray.fill(0.);
    texture.needsUpdate = true;
}

function fillOnesTexture(texture) {

    const inputArray = texture.image.data;

    inputArray.fill(1.)
    texture.needsUpdate = true;
}

function fillRandTexture(texture) {
    let inputArray = texture.image.data;
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = Math.random() * .2;
    }
    texture.needsUpdate = true;
}

function nextPowOfTwo(n) {
    //console.log(Math.ceil(Math.log2(n)));
    return Math.pow(2, Math.ceil(Math.log2(n)));
}

function onWindowResize() {

    globals.camera.aspect = window.innerWidth / window.innerHeight;
    globals.camera.updateProjectionMatrix();

    globals.renderer.setSize(window.innerWidth, window.innerHeight, false);

}

function unbindRenderLoop() {
    globals.renderer.setAnimationLoop(null);
}

function bindRenderLoop() {
    globals.renderer.setAnimationLoop(animate);
}

function animate() {
    render();
    stats.update();
}

function render() {
    // globals.time = performance.now()
    // globals.timeDiff = globals.time - globals.last;
    // globals.ticks = 100;//Math.round(globals.timeDiff / globals.delta);
    // console.log(globals.ticks)

    for (let i = 0; i < globals.ticks; i++) {
        // update time deltas in the cube shader and the texture shader
        globals.positionUniforms['delta'].value = globals.delta;
        globals.positionUniforms['prevAccel'].value = globals.gpuCompute.getAlternateRenderTarget(globals.accelerationVariable).texture;
        globals.positionUniforms['prevVel'].value = globals.gpuCompute.getAlternateRenderTarget(globals.velocityVariable).texture;
        globals.positionUniforms['pointerClicked'] = { value: globals.pointerClicked };
        globals.positionUniforms['pointerCoords'] = { value: globals.pointerPos };

        globals.velocityUniforms['delta'].value = globals.delta;
        globals.velocityUniforms['prevAccel'].value = globals.gpuCompute.getAlternateRenderTarget(globals.accelerationVariable).texture;

        globals.accelerationUniforms['delta'].value = globals.delta;


        // compute on the texture
        globals.gpuCompute.compute();

        // set the position texture in the cubes
        globals.lineUniforms['texturePosition'].value = globals.gpuCompute.getCurrentRenderTarget(globals.positionVariable).texture;
        globals.lineUniforms['textureVelocity'].value = globals.gpuCompute.getCurrentRenderTarget(globals.velocityVariable).texture;
        globals.lineUniforms['textureAcceleration'].value = globals.gpuCompute.getCurrentRenderTarget(globals.accelerationVariable).texture;

    }
    globals.renderer.render(scene, globals.camera);

    // globals.time = globals.time + globals.delta;

    // if (globals.time - lastTime > 1.) {
    //     lastTime = globals.time;
    //     console.log(globals.time)
    // }

    globals.last = performance.now();

}
