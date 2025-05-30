import React, { useRef, useEffect, useState } from 'react';
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
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<BlueZone | null>(null);

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

    // Initialize renderer with better quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      precision: 'highp'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add orbit controls with improved settings
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.8;
    controls.minDistance = 3.5;
    controls.maxDistance = 8;
    controls.enablePan = false;
    controls.autoRotate = false;
    controlsRef.current = controls;

    // Improved lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Create Earth with improved textures
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
      bumpMap: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
      bumpScale: 0.05,
      specularMap: textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'),
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    earthRef.current = earth;

    // Create markers with improved visuals
    const markersGroup = new THREE.Group();
    scene.add(markersGroup);
    markersRef.current = markersGroup;

    // Add blue zone markers with improved appearance
    blueZonesData.forEach((zone) => {
      const phi = (90 - zone.coordinates.lat) * (Math.PI / 180);
      const theta = (zone.coordinates.lng + 180) * (Math.PI / 180);
      
      const x = -(2.1 * Math.sin(phi) * Math.cos(theta));
      const y = 2.1 * Math.cos(phi);
      const z = 2.1 * Math.sin(phi) * Math.sin(theta);
      
      // Create marker with improved geometry
      const markerGeometry = new THREE.SphereGeometry(0.04, 16, 16);
      const markerMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x00ffff,
        emissive: 0x0066ff,
        emissiveIntensity: 0.5,
        shininess: 50
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      
      marker.position.set(x, y, z);
      marker.userData = { zoneId: zone.id };
      
      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(0.06, 16, 16);
      const glowMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x0099ff,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.set(x, y, z);
      
      markersGroup.add(marker);
      markersGroup.add(glow);
      
      // Animate glow
      const animateGlow = () => {
        new TWEEN.Tween(glow.scale)
          .to({ x: 2, y: 2, z: 2 }, 2000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .yoyo(true)
          .repeat(Infinity)
          .start();
      };
      
      animateGlow();
    });

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);

    // Improved marker interaction
    const handleMarkerInteraction = (event: MouseEvent) => {
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
            setSelectedLocation(selectedZone);
            setShowLocationInfo(true);
            if (controlsRef.current) {
              controlsRef.current.autoRotate = false;
            }
          }
        }
      }
    };
    
    containerRef.current.addEventListener('click', handleMarkerInteraction);

    // Animation loop with improved performance
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
        containerRef.current.removeEventListener('click', handleMarkerInteraction);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      {showLocationInfo && selectedLocation && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-2xl w-full mx-4">
          <button
            onClick={() => setShowLocationInfo(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ×
          </button>
          
          <h2 className="text-2xl font-bold mb-4 text-blue-zone-700 dark:text-blue-zone-300">
            {selectedLocation.name}, {selectedLocation.location}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={selectedLocation.images.main}
                alt={selectedLocation.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300">
                {selectedLocation.description}
              </p>
            </div>
            
            <div>
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}&zoom=8`}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg mb-4"
              ></iframe>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-zone-600 dark:text-blue-zone-400">
                  Características principales:
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {selectedLocation.characteristics.slice(0, 3).map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              onZoneSelect(selectedLocation);
              setShowLocationInfo(false);
            }}
            className="mt-6 bg-blue-zone-600 hover:bg-blue-zone-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Ver más detalles
          </button>
        </div>
      )}
    </div>
  );
};

export default EarthGlobe;