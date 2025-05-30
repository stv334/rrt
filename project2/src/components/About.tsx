import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="que-son" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-zone-800 dark:text-blue-zone-300">
              ¿Qué son las Zonas Azules?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Las Zonas Azules son regiones del mundo donde las personas viven significativamente más tiempo y con mejor salud que el promedio mundial. Se identifican por una alta concentración de personas centenarias activas que mantienen una calidad de vida excepcional hasta edades avanzadas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-blue-zone-50 dark:bg-blue-zone-900/30 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-zone-700 dark:text-blue-zone-300">
                Características comunes
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Dieta basada principalmente en plantas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Actividad física moderada pero constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Propósito de vida claro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Fuertes lazos familiares y sociales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Manejo efectivo del estrés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Consumo moderado de alcohol (excepto adventistas)</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-zone-50 dark:bg-blue-zone-900/30 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-zone-700 dark:text-blue-zone-300">
                Beneficios observados
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Mayor esperanza de vida (10+ años sobre el promedio)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Menor incidencia de enfermedades crónicas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Mejor salud mental y cognitiva en la vejez</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Mayor independencia funcional hasta edades avanzadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Menor tasa de depresión y aislamiento social</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-zone-500 mr-2">•</span>
                  <span>Mayor sensación de propósito y satisfacción vital</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              "El secreto de la longevidad no está en una dieta, ejercicio o suplemento específico, sino en una combinación de factores que crean un estilo de vida saludable y significativo."
            </p>
            <p className="mt-2 text-blue-zone-600 dark:text-blue-zone-400 font-medium">
              — Dan Buettner, investigador de las Zonas Azules
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;