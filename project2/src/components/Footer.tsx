import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-zone-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-zone-400 mr-2" />
              <span className="text-xl font-bold">Zonas Azules</span>
            </div>
            <p className="text-blue-zone-100 dark:text-gray-400 mb-4">
              Explorando los secretos de la longevidad y el bienestar a través de las cinco regiones del mundo donde las personas viven más tiempo y mejor.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#que-son" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  ¿Qué son las Zonas Azules?
                </a>
              </li>
              <li>
                <a href="#mapa" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  Mapa Interactivo
                </a>
              </li>
              <li>
                <a href="#zonas" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  Las 5 Zonas
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.bluezones.com/" target="_blank" rel="noopener noreferrer" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  Blue Zones Oficial
                </a>
              </li>
              <li>
                <a href="https://www.nationalgeographic.com/books/article/the-blue-zones" target="_blank" rel="noopener noreferrer" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  National Geographic
                </a>
              </li>
              <li>
                <a href="https://www.who.int/news-room/fact-sheets/detail/ageing-and-health" target="_blank" rel="noopener noreferrer" className="text-blue-zone-200 hover:text-blue-zone-400 transition-colors">
                  OMS - Envejecimiento
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-zone-700 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-zone-300 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Las Cinco Zonas Azules. Proyecto educativo sobre longevidad y salud global.
          </p>
          
          <div className="flex items-center">
            <span className="text-blue-zone-300 dark:text-gray-500 text-sm mr-2">
              Hecho con
            </span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span className="text-blue-zone-300 dark:text-gray-500 text-sm">
              para un mundo más saludable
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-blue-zone-700 hover:bg-blue-zone-600 rounded-full transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;