import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BlueZones from './components/BlueZones';
import EarthGlobe from './components/EarthGlobe';
import Footer from './components/Footer';
import ZoneDetail from './components/ZoneDetail';
import { BlueZone } from './types';
import { blueZonesData } from './data/blueZonesData';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<BlueZone | null>(null);
  const [showZoneDetail, setShowZoneDetail] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleZoneSelect = (zone: BlueZone) => {
    setSelectedZone(zone);
    setShowZoneDetail(true);
  };

  const closeZoneDetail = () => {
    setShowZoneDetail(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Custom cursor */}
      {/* <div className="custom-cursor" id="custom-cursor"></div> */}
      
      {/* Header */}
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Interactive Earth Globe */}
      <section id="mapa" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EarthGlobe onZoneSelect={handleZoneSelect} />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-xl p-8 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-zone-600 dark:text-blue-zone-400">
              Explora el Mapa Interactivo
            </h2>
            <p className="text-lg mb-6">
              Gira el globo terráqueo y haz clic en los marcadores para descubrir cada Zona Azul.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={32} className="mx-auto text-blue-zone-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Blue Zones Section */}
      <BlueZones zones={blueZonesData} onZoneSelect={handleZoneSelect} />
      
      {/* Zone Detail Modal */}
      {showZoneDetail && selectedZone && (
        <ZoneDetail zone={selectedZone} onClose={closeZoneDetail} />
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;