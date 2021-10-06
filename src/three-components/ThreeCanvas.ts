import * as THREE from "three";

let renderer: THREE.WebGLRenderer;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

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

scene.add(cube);

// animateRender - updates our render window and moves any meshes we specify.
function animateRender(): void {
    requestAnimationFrame(animateRender);
    cube.rotation.x += 0.01;
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
    requestAnimationFrame(CreateScene);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: threecanvas,
    });
    resizeRender();
    animateRender();
}
