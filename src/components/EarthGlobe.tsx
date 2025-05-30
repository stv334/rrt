import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as TWEEN from '@tweenjs/tween.js';
import { blueZonesData } from '../data/blueZonesData';
import { BlueZone } from '../types';

interface EarthGlobeProps {
  onZoneSelect: (zone: BlueZone) => void;
}

const EarthGlobe: React.FC<EarthGlobeProps> = ({ onZoneSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const markersRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.autoRotate = false; // Disable auto-rotation
    controlsRef.current = controls;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
      bumpMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
      bumpScale: 0.05,
      specularMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    earthRef.current = earth;

    // Create markers for blue zones
    const markersGroup = new THREE.Group();
    scene.add(markersGroup);
    markersRef.current = markersGroup;

    // Add blue zone markers
    blueZonesData.forEach((zone) => {
      const phi = (90 - zone.coordinates.lat) * (Math.PI / 180);
      const theta = (zone.coordinates.lng + 180) * (Math.PI / 180);
      
      const x = -(2.1 * Math.sin(phi) * Math.cos(theta));
      const y = 2.1 * Math.cos(phi);
      const z = 2.1 * Math.sin(phi) * Math.sin(theta);
      
      const markerGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      
      marker.position.set(x, y, z);
      marker.userData = { zoneId: zone.id };
      
      const pulseGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const pulseMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.4
      });
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
      pulse.position.set(x, y, z);
      
      markersGroup.add(marker);
      markersGroup.add(pulse);
      
      const animatePulse = () => {
        pulse.scale.set(1, 1, 1);
        
        new TWEEN.Tween(pulse.scale)
          .to({ x: 3, y: 3, z: 3 }, 2000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
          
        new TWEEN.Tween(pulseMaterial)
          .to({ opacity: 0 }, 2000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onComplete(() => {
            pulse.scale.set(1, 1, 1);
            pulseMaterial.opacity = 0.4;
            animatePulse();
          })
          .start();
      };
      
      animatePulse();
    });

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Handle mouse click
    const handleMouseClick = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current || !markersRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
      
      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      
      const intersects = raycasterRef.current.intersectObjects(markersRef.current.children, true);
      
      if (intersects.length > 0) {
        const zoneId = intersects[0].object.userData.zoneId;
        if (zoneId) {
          const selectedZone = blueZonesData.find(zone => zone.id === zoneId);
          if (selectedZone) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50';
            modal.innerHTML = `
              <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full mx-4">
                <h3 class="text-xl font-bold mb-4">${selectedZone.name}</h3>
                <img src="${selectedZone.images.main}" alt="${selectedZone.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Ver más detalles</button>
              </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
              if (e.target === modal) {
                modal.remove();
              } else if (e.target instanceof HTMLButtonElement) {
                modal.remove();
                onZoneSelect(selectedZone);
              }
            });
          }
        }
      }
    };
    
    containerRef.current.addEventListener('click', handleMouseClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      TWEEN.update();
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleMouseClick);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [onZoneSelect]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default EarthGlobe;