import type { PerspectiveCamera } from "three";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
{
	camera.fov = 45;
	camera.aspect = 1;
	camera.near = 0.1;
	camera.far = 1000;
}

// Geometry cards
