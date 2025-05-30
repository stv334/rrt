import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { BlueZone } from '../types';

interface ZoneDetailProps {
  zone: BlueZone;
  onClose: () => void;
}

const ZoneDetail: React.FC<ZoneDetailProps> = ({ zone, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20 }}
          className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image */}
          <div 
            className="h-64 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${zone.images.main})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-bold text-white">{zone.name}</h2>
              <p className="text-xl text-white opacity-90">{zone.location}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                Descripción
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {zone.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                  Características
                </h3>
                <ul className="space-y-2">
                  {zone.characteristics.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-zone-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                  Actividades cotidianas
                </h3>
                <ul className="space-y-2">
                  {zone.activities.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-zone-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                Forma de vida
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {zone.lifestyle}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                Trabajos
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {zone.jobs}
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-zone-700 dark:text-blue-zone-400">
                Habitantes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {zone.inhabitants}
              </p>
            </div>
            
            {/* Gallery */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-zone-700 dark:text-blue-zone-400">
                Galería
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {zone.images.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className="h-40 bg-cover bg-center rounded-lg overflow-hidden"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Facts */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-zone-700 dark:text-blue-zone-400">
                Datos interesantes
              </h3>
              <div className="bg-blue-zone-50 dark:bg-blue-zone-900/30 rounded-lg p-4">
                <ul className="space-y-3">
                  {zone.facts.map((fact, index) => (
                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-zone-500 mr-2 font-bold">→</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ZoneDetail;