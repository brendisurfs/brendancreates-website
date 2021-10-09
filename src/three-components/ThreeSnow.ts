import * as THREE from "three";

const geo = new THREE.BufferGeometry();

let positions = [];
let positions2 = [];

let n = 1000;

for (let i = 0; i < n; i++) {
	let x = Math.random() * n;
	let y = Math.random() * n;
	let z = Math.random() * n;

	positions.push(x, y, z);
	positions2.push(x, y, z);
}
