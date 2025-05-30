import { BlueZone } from '../types';

export const blueZonesData: BlueZone[] = [
  {
    id: 'sardinia',
    name: 'Cerdeña',
    location: 'Italia',
    coordinates: {
      lat: 40.1209,
      lng: 9.0129
    },
    description: 'Isla mediterránea con montañas y costas, donde muchos hombres superan los 100 años con una calidad de vida excepcional.',
    characteristics: [
      'Dieta rica en granos integrales',
      'Consumo moderado de queso de cabra',
      'Vino tinto en cantidades moderadas',
      'Alta actividad física diaria'
    ],
    lifestyle: 'Muy familiar, con fuerte vida comunitaria y ritmo de vida tranquilo pero activo.',
    jobs: 'Agricultura, ganadería, trabajo físico moderado que se mantiene hasta edades avanzadas.',
    inhabitants: 'Muchos hombres superan los 100 años con una calidad de vida excepcional.',
    activities: [
      'Caminatas largas diarias',
      'Trabajo en el campo',
      'Reuniones familiares frecuentes',
      'Preparación de alimentos tradicionales'
    ],
    images: {
      main: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
      gallery: [
        'https://images.pexels.com/photos/6143354/pexels-photo-6143354.jpeg',
        'https://images.pexels.com/photos/6143363/pexels-photo-6143363.jpeg',
        'https://images.pexels.com/photos/6143364/pexels-photo-6143364.jpeg'
      ]
    },
    facts: [
      'Cerdeña tiene la mayor concentración de centenarios hombres en el mundo',
      'Los pastores sardos caminan un promedio de 5 millas diarias',
      'El queso Pecorino Sardo, rico en omega-3, es parte fundamental de su dieta',
      'El vino Cannonau contiene 2-3 veces más flavonoides que otros vinos'
    ]
  },
  {
    id: 'okinawa',
    name: 'Okinawa',
    location: 'Japón',
    coordinates: {
      lat: 26.3344,
      lng: 127.8056
    },
    description: 'Archipiélago tropical al sur de Japón, conocido por tener la mayor esperanza de vida femenina del mundo.',
    characteristics: [
      'Filosofía de vida "Ikigai" (razón de ser)',
      'Comunidad unida y apoyo social',
      'Dieta basada principalmente en vegetales',
      'Práctica regular de actividades físicas suaves'
    ],
    lifestyle: 'Alimentación basada en vegetales, tofu, batata morada, y poca carne. Vida social activa hasta edades avanzadas.',
    jobs: 'Agricultura, oficios manuales, labores en casa que continúan realizando incluso después de la "jubilación".',
    inhabitants: 'Mayor esperanza de vida femenina del mundo, con muchas mujeres superando los 100 años.',
    activities: [
      'Tai chi y ejercicios tradicionales',
      'Jardinería diaria',
      'Reuniones comunitarias frecuentes',
      'Preparación de alimentos tradicionales'
    ],
    images: {
      main: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
      gallery: [
        'https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg',
        'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
        'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg'
      ]
    },
    facts: [
      'Las mujeres de Okinawa viven un promedio de 90 años',
      'Consumen batata morada (imo) como alimento básico',
      'Practican "hara hachi bu" - comer hasta estar 80% lleno',
      'Mantienen círculos sociales llamados "moai" que brindan apoyo durante toda la vida'
    ]
  },
  {
    id: 'nicoya',
    name: 'Península de Nicoya',
    location: 'Costa Rica',
    coordinates: {
      lat: 9.7489,
      lng: -85.2775
    },
    description: 'Región cálida, semiárida y rural en la costa pacífica de Costa Rica, donde los habitantes envejecen activamente.',
    characteristics: [
      'Agua rica en calcio y magnesio',
      'Dieta rica en maíz nixtamalizado y frijoles',
      'Exposición regular al sol (vitamina D)',
      'Propósito de vida claro ("plan de vida")'
    ],
    lifestyle: 'Mucha actividad física diaria, relaciones sociales fuertes y una dieta basada en alimentos tradicionales.',
    jobs: 'Agricultura, cocina tradicional, oficios varios que implican actividad física constante.',
    inhabitants: 'Envejecen activamente, con bajo índice de enfermedades crónicas y alta calidad de vida.',
    activities: [
      'Caminatas diarias',
      'Cuidado del hogar y la tierra',
      'Cocina tradicional',
      'Reuniones familiares frecuentes'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
      gallery: [
        'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg',
        'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg',
        'https://images.pexels.com/photos/1021068/pexels-photo-1021068.jpeg'
      ]
    },
    facts: [
      'Los hombres de 60 años en Nicoya tienen el doble de probabilidades de llegar a los 90 que en EE.UU.',
      'El agua de la región es excepcionalmente rica en calcio y magnesio',
      'La dieta tradicional de "gallo pinto" (arroz y frijoles) es rica en antioxidantes',
      'Mantienen una fuerte conexión con la familia y la comunidad'
    ]
  },
  {
    id: 'icaria',
    name: 'Icaria',
    location: 'Grecia',
    coordinates: {
      lat: 37.6018,
      lng: 26.1849
    },
    description: 'Isla en el mar Egeo, de montañas y olivares, con una bajísima tasa de enfermedades crónicas.',
    characteristics: [
      'Dieta mediterránea tradicional',
      'Consumo de aceite de oliva, vino, vegetales y pescado',
      'Ritmo de vida lento y sin estrés',
      'Siestas regulares'
    ],
    lifestyle: 'Ritmo de vida lento, muchas siestas, contacto con la naturaleza y alimentación mediterránea tradicional.',
    jobs: 'Agricultura, cocina, pesca y trabajos que permiten un ritmo pausado pero constante.',
    inhabitants: 'Bajísima tasa de enfermedades crónicas, especialmente cardiovasculares y demencia.',
    activities: [
      'Reuniones sociales diarias',
      'Cosechas de productos locales',
      'Caminatas por terreno montañoso',
      'Preparación de comidas tradicionales'
    ],
    images: {
      main: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      gallery: [
        'https://images.pexels.com/photos/161815/santorini-oia-greece-travel-161815.jpeg',
        'https://images.pexels.com/photos/3224533/pexels-photo-3224533.jpeg',
        'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg'
      ]
    },
    facts: [
      'Uno de cada tres icarianos vive más de 90 años',
      'Tienen aproximadamente un 20% menos de cáncer y un 50% menos de enfermedades cardíacas',
      'Consumen más de 150 tipos de hierbas silvestres con propiedades medicinales',
      'El té de hierbas local contiene propiedades diuréticas que ayudan a reducir la presión arterial'
    ]
  },
  {
    id: 'loma-linda',
    name: 'Loma Linda',
    location: 'California, EE.UU.',
    coordinates: {
      lat: 34.0483,
      lng: -117.2611
    },
    description: 'Comunidad urbana del sur de California, donde la población adventista del séptimo día vive 10 años más que el promedio estadounidense.',
    characteristics: [
      'Comunidad adventista del séptimo día',
      'Dieta vegetariana estricta',
      'Abstención de alcohol y tabaco',
      'Descanso semanal (sábado)'
    ],
    lifestyle: 'Muy enfocada en la salud, ejercicio regular, espiritualidad y equilibrio entre trabajo y descanso.',
    jobs: 'Diversos, pero con equilibrio entre vida laboral y personal, priorizando tiempo para familia y comunidad.',
    inhabitants: 'Evitan alcohol y tabaco, promueven el descanso y mantienen una vida activa física y mentalmente.',
    activities: [
      'Ejercicio regular programado',
      'Lectura y actividades intelectuales',
      'Meditación y prácticas espirituales',
      'Voluntariado comunitario'
    ],
    images: {
      main: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      gallery: [
        'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
        'https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg',
        'https://images.pexels.com/photos/5938412/pexels-photo-5938412.jpeg'
      ]
    },
    facts: [
      'Los adventistas de Loma Linda viven un promedio de 10 años más que otros estadounidenses',
      'Aproximadamente el 40% son vegetarianos estrictos',
      'Dedican un día completo a la semana (sábado) al descanso y la familia',
      'Consumen abundantes nueces, lo que se asocia con una reducción del 50% en el riesgo de enfermedades cardíacas'
    ]
  }
];