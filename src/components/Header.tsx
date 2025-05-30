import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  mobileMenuOpen, 
  toggleMobileMenu 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Globe className="h-8 w-8 text-blue-zone-600 dark:text-blue-zone-400 mr-2" />
            <span className="text-xl font-bold text-blue-zone-800 dark:text-blue-zone-200">
              Longevidad Global
            </span>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#inicio" className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors">
              Inicio
            </a>
            <a href="#que-son" className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors">
              ¿Qué son?
            </a>
            <a href="#mapa" className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors">
              Mapa Interactivo
            </a>
            <a href="#zonas" className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors">
              Las 5 Zonas
            </a>
          </motion.nav>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Inicio
              </a>
              <a 
                href="#que-son" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                ¿Qué son?
              </a>
              <a 
                href="#mapa" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Mapa Interactivo
              </a>
              <a 
                href="#zonas" 
                className="text-gray-700 dark:text-gray-200 hover:text-blue-zone-600 dark:hover:text-blue-zone-400 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                Las 5 Zonas
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;