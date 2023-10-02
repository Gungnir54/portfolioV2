import * as THREE from 'three';

export function initAnimation() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('animated-logo').appendChild(renderer.domElement);

  const runeTexture = new THREE.TextureLoader().load('../assets/rune.png');
  const runeMaterial = new THREE.MeshBasicMaterial({ map: runeTexture });
  const runeGeometry = new THREE.PlaneGeometry(1, 1); // Ajustez les dimensions selon vos besoins
  const rune = new THREE.Mesh(runeGeometry, runeMaterial);
  scene.add(rune);

  const textGeometry = new THREE.TextGeometry('Vincent Becker Web Developement', {
    font: 'Roboto',
    size: 0.2,
    height: 0.05,
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(1, 1, 0); // Ajustez la position du texte
  scene.add(textMesh);

  function animate() {
    requestAnimationFrame(animate);
    textMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}
