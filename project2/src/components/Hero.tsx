import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the background particles
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle) => {
      gsap.to(particle, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        opacity: 'random(0.3, 0.7)',
        duration: 'random(10, 20)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="particle absolute rounded-full bg-blue-zone-400 dark:bg-blue-zone-600 opacity-30"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-zone-800 dark:text-blue-zone-200 text-shadow"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            Las Cinco Zonas Azules
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Descubre los lugares del mundo donde las personas viven más tiempo y con mejor calidad de vida.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#que-son" 
              className="inline-block bg-blue-zone-600 hover:bg-blue-zone-700 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Descubrir
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-blue-zone-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;