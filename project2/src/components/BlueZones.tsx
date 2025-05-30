import React from 'react';
import { motion } from 'framer-motion';
import { BlueZone } from '../types';

interface BlueZonesProps {
  zones: BlueZone[];
  onZoneSelect: (zone: BlueZone) => void;
}

const BlueZones: React.FC<BlueZonesProps> = ({ zones, onZoneSelect }) => {
  return (
    <section id="zonas\" className="py-20 bg-blue-zone-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-zone-800 dark:text-blue-zone-300">
            Las 5 Zonas Azules
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explora las cinco regiones del mundo donde las personas viven más tiempo y con mejor calidad de vida. Cada zona tiene características únicas que contribuyen a la longevidad de sus habitantes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="blue-zone-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${zone.images.main})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-zone-700 dark:text-blue-zone-400">
                  {zone.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {zone.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3">
                  {zone.description}
                </p>
                <button
                  onClick={() => onZoneSelect(zone)}
                  className="w-full bg-blue-zone-600 hover:bg-blue-zone-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Descubrir más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlueZones;