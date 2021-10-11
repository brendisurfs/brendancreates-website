/* 
TODO: 
	- Add mobile device orientation controls to page.
	- clean up cube rotation. 
	- add particle background again.
*/

import * as THREE from "three";

// external imports
import { particles } from "./ThreeSnow";

let renderer: THREE.WebGLRenderer;

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

//	----------------CURSOR---------------------
//	|
//	v HOW to get the coordinates of the mouse
const cursorLocation = {
	x: 0,
	y: 0,
};

window.addEventListener("mousemove", (event: MouseEvent) => {
	cursorLocation.x = event.clientX / sizes.width - 0.5;
	cursorLocation.y = -(event.clientY / sizes.height - 0.5);
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
{
	camera.fov = 75;
	camera.aspect == sizes.width / sizes.height;
	camera.near = 0.1;
	camera.far = 1000;

	camera.position.z = 5;
}

const geometry = new THREE.BoxGeometry();
const mats = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, mats);

{
	cube.rotation.y = 4;
}
scene.background = new THREE.Color("#111111");

//Add to scene here
//	|
//	v
// scene.add(cube);
scene.add(particles);

/*
 *
 *
 * v-------------------FUNCTIONS----------------------v
 * |
 * |
 * v
 */
// animateRender - updates our render window and moves any meshes we specify.
function animateRender(): void {
	requestAnimationFrame(animateRender);
	// cube.rotation.y += 0.01;
	camera.position.x = Math.sin(cursorLocation.x * Math.PI * -1) * 0.15;
	camera.position.y = Math.sin(cursorLocation.y * Math.PI * -1) * 0.15;
	camera.lookAt(cube.position);

	renderer.render(scene, camera);
}

// resizeRender - resizes our rendered image in conjunction with the browser window size.
function resizeRender() {
	requestAnimationFrame(resizeRender);
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}
// CreateScene - creates our compiled threejs scene to export to a component.
export function CreateScene(threecanvas: any) {
	renderer = new THREE.WebGLRenderer({
		antialias: true,
		canvas: threecanvas,
	});
	resizeRender();
	animateRender();
}
