"use strict";
/* globals THREE, console */

// 1. Create an array to store stars
// 2. Create stars in random locations within a cube
// 3. Store stars in array so we can move them within render

let camera, scene, renderer;
let planeMesh;
let stars = [];
let colors = [
	"#183936",
	"#497874",
	"#6EB5AF",
	"#93F2EA",
	"#ffffff"
];

function init() {
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog(0x000000, 0.015, 72);

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
	renderer = new THREE.WebGLRenderer({preserveDrawingBuffer: true, alpha: true});
	renderer.sortObjects = false;
	renderer.autoClearColor = false;

	// Scene initialization
	camera.position.z = 55;

	renderer.setClearColor( "#000", 1);
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );

	document.body.appendChild( renderer.domElement );

	for (let i = 0; i < 5000; i++) {
		let geometry = new THREE.SphereBufferGeometry(0.08 * Math.random(), 20, 20);
		let material = new THREE.MeshBasicMaterial({
			color: colors[Math.floor(Math.random() * colors.length)], 
			shading: THREE.FlatShading
    	});

	    let star = new THREE.Mesh(geometry, material);

    	star.position.x = Math.random() * 100 - 50;
    	star.position.y = Math.random() * 100 - 50;
    	star.position.z = Math.random() * 50 - 25;

    	scene.add(star);
    	stars.push(star);
	}

	let planeGeometry = new THREE.PlaneGeometry(1000, 500, 1, 1);
	let planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, transparent: true, opacity: 1} );

	planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

	scene.add(planeMesh);
}


function render() {

    requestAnimationFrame(render);
	renderer.render(scene, camera);

	for (let i = 0; i < stars.length; i++) {
		stars[i].position.z += 0.09;

		if (stars[i].position.z >= 60) {
			stars[i].position.x = Math.random() * 100 - 50;
	    	stars[i].position.y = Math.random() * 100 - 50;
			stars[i].position.z = 5;
		}
	}
}

init();
render();

window.addEventListener("resize", function() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
});