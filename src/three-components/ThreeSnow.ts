import * as THREE from "three";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls";

const pcount = 160;

// geometry

const positions = new Float32Array(pcount * 3);

for (let i = 0; i < pcount * 3; i++) {
	positions[i] = (Math.random() - 0.5) * 10;
}

// we add a 3 for item size to group in 3s for the vertices.
let particleBufferAttribute = new THREE.BufferAttribute(positions, 3);

const particleGeometry = new THREE.BufferGeometry();
{
	particleGeometry.setAttribute("position", particleBufferAttribute);
}

const pointsMaterial = new THREE.PointsMaterial();
{
	pointsMaterial.size = 0.02;
	pointsMaterial.sizeAttenuation = true;
}
// points
export const particles = new THREE.Points(particleGeometry, pointsMaterial);
