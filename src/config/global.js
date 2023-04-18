export default {
  global: {
    componenteFormativo: 'Alistamiento para el análisis químico de muestras',
    descripcionCurso:
      'Mediante este componente, el aprendiz podrá reconocer la importancia del análisis de las muestras y el rigor técnico de dicho proceso; todo ello como insumo para generar un resultado conforme con la trazabilidad que se le dio a la muestra desde el inicio del proceso.<br>Profundizará, además, en buenas prácticas de laboratorio, manejo de EPP, condiciones de seguridad, manejo de materiales y equipos de laboratorio, entre otros, para la valoración de muestras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },

  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Alistamiento general y bases conceptuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Alistamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Bases conceptuales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos y equipos para la toma de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Muestreo y análisis en aguas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Muestreo y análisis en suelos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Muestreo y análisis de olores (aire)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Muestreo y análisis de residuos sólidos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Factores que influyen en la representatividad',
        desarrolloContenidos: true,
        subMenu: [
          ///
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos clásicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos instrumentales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Materiales de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          ////
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Reactivos y soluciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Componentes de una disolución',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Importancia de las disoluciones',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Clases de disoluciones',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Solubilidad',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Factores que afectan la solubilidad',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Unidades de la concentración de las disoluciones',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Recepción de muestras ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Recepción de la muestra al laboratorio (agua)',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Recepción de la muestra al laboratorio (suelo)',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Recepción de la muestra al laboratorio (olores)',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'La entrega al laboratorio',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Sistema internacional de medidas y notación científica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Unidades de medición',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'El sistema internacional de unidades y notación científica',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Sistema de unidades: CGS, MKS, SI, inglés',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Conversiones de unidades',
            hash: 't_8_4',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Balance de ecuaciones y pasos para balanceo por tanteo',
        desarrolloContenidos: true,
        subMenu: [
          ///
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Microorganismos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Tipos de microorganismos',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Microorganismos perjudiciales y beneficiosos',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Ejemplos de microorganismos',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Medios de cultivo',
        desarrolloContenidos: true,
        subMenu: [
          ////
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Algoestadistica. (2011, 23 abril). Notación científica. Probabilidad y Estadística.',
      link:
        'http://pedroprobabilidadyestadistica.blogspot.com/2011/04/notacion-cientifica.html',
    },
    {
      referencia:
        'Comisión Europea. (2021). Métodos de muestreo para los distintos tipos de muestras - SAMANCTA.',
      link:
        'https://ec.europa.eu/taxation_customs/dds2/SAMANCTA/ES/GeneralProcedures/SamplingMethods_ES.htm',
    },
    {
      referencia:
        'Facultad de Ingeniería de LUZ. (2018). Cifras Significativas - Física I. Laboratorio de Física I. Física I. Laboratorio de Física I.',
      link:
        'https://sites.google.com/site/laboratoriodefisicaifiluz/practicas-de-laboratorio/practica-no-1/cifras-significativas',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo para análisis de laboratorio. INS.',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin SIVICAP/2011 Manual toma de muestras agua.pdf',
    },
    {
      referencia:
        'M. J. (2019, 7 enero). Molaridad y molalidad. La Guía de Química.',
      link:
        'https://quimica.laguia2000.com/general/unidades-de-concentracion-parte-1',
    },
    {
      referencia:
        'Raffino, M. (2020, 23 julio). Microorganismo - Concepto, tipos, características y ejemplos. Concepto.de',
      link: 'https://concepto.de/microorganismo/',
    },
    {
      referencia:
        'Salgado, S. (2018). La elección del método de análisis: importancia e impacto [Trabajo de grado, Universidad de Sevilla, Sevilla]. Facultad de Farmacia.',
      link:
        'https://idus.us.es/bitstream/handle/11441/82149/SALGADO%20GONZ%C3%81LEZ%2C%20SARA.pdf?sequence=1&isAllowed=y#:~:text=Al%20elegir%20un%20m%C3%A9todo%2C%20se,costo%20(Harvey%2C%202016)',
    },
    {
      referencia:
        'Universidad de Panamá. (s. f.). Sistema Internacional. Cursos de Química Analítica.',
      link:
        'https://alkemist.jimdofree.com/qm-112/sem-2-sistema-internacional/',
    },
    {
      referencia:
        'Universidad Miguel Hernández de Elche. (s. f.). Preparación de Medios de Cultivo. Catálogo de Prácticas de Microbiología. ',
      link:
        'https://mobile.sites.google.com/a/goumh.umh.es/practicas-de-microbiologia/indice/preparacion-de-medios-de-cultivo?tmpl=%2Fsystem%2Fapp%2Ftemplates%2Fprint%2F&showPrintDialog=1',
    },
    {
      referencia:
        'Universidad Politécnica de Cartagena. (2017). Toma y tratamiento de muestras. ',
      link: 'http://www.upct.es/~minaeees/toma_tratamiento_muestras.doc',
    },
    {
      referencia: 'UNPSJB. (2015). Química. Guía de laboratorio Nº1. UNPSJB.',
      link:
        'http://www.ing.unp.edu.ar/asignaturas/quimica/practicos_de_laboratorio_pdf/lab1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aguas residuales',
      significado:
        'Aguas que contienen residuos líquidos o materias sólidas evacuadas como desechos (WMO, 2012). Las aguas residuales son cualquier tipo de agua cuya calidad está afectada negativamente por la influencia antropogénica. Las aguas residuales incluyen las aguas usadas, domésticas, urbanas, y los residuos líquidos industriales o mineros eliminados, o las aguas que se mezclaron con las anteriores (aguas pluviales o naturales) (IDEAM, s.f.).',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Representa el proceso de recolección y acumulación de residuos sólidos en el sitio de generación de los diferentes sectores de la producción. Implica la tenencia de residuos peligrosos por un período temporario al final del cual estos serán tratados, dispuestos o almacenados en otro lugar. (ICBF, 2020)',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'Son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'Es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia (Decreto 1575, 2007, p.1).',
    },
    {
      termino: 'Emergencia',
      significado:
        'Es aquella situación de peligro o desastre o la inminencia del mismo, que afecta el funcionamiento normal de la empresa. Requiere de una reacción inmediata y coordinada de los trabajadores, brigadas de emergencias y primeros auxilios y, en algunos casos, de otros grupos de apoyo, dependiendo de su magnitud. (ICBF, 2020)',
    },
    {
      termino: 'Ficha de Seguridad (FDS) u Hoja de datos de Seguridad',
      significado:
        'Es una fuente que proporciona información completa sobre una sustancia o mezcla con miras al control y reglamentación de su utilización en el lugar de trabajo. Adicional a lo anterior, aporta información sobre peligros, incluidos aquellos para el medio ambiente, y sobre las medidas de seguridad correspondientes. (ICBF, 2020)',
    },
    {
      termino: 'Horizonte del suelo',
      significado:
        'Es una capa de suelo o de material de suelo aproximadamente paralela a la  superficie  del  terreno,  que  es  producto  de  la  evolución  y  que  difiere  de  capas  adyacentes  genéticamente relacionadas con ella en propiedades y características físicas, químicas y biológicas. (NTC 3656)',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso de muestreo del sistema de suministro de agua para consumo humano, que cubre espacio, tiempo y frecuencia en los puntos concertados según norma (IDEAM, s.f.).',
    },
    {
      termino: 'Muestra simple',
      significado:
        'Este tipo de muestra se toma en un momento y lugar determinado. Es aplicable en los casos que se sabe, la composición del agua no varía significativamente en el tiempo o lugar, como lo son usualmente para caracterización fisicoquímica de aguas naturales. En este caso, tomar diferentes muestras puntuales puede ser útil para describir el comportamiento a través del espacio y tiempo (NTC 5667-2, 1995).',
    },
    {
      termino: 'Muestras compuestas',
      significado:
        'De acuerdo con el Instituto de Investigaciones Marinas y Costeras [INVEMAR], en el Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos, se describen estas muestras como las que son usadas en su mayoría para vertimientos domésticos e industriales. Debido a la variación horaria de su caudal, son muy utilizadas en el monitoreo de ríos, vertimientos o procesos industriales en línea. Su toma se realiza en un mismo punto, en intervalos de tiempo previamente definidos, y el volumen de cada muestra parcial puede ser constante o variar en función del caudal.  (INVEMAR).',
    },
    {
      termino: 'Muestras integradas',
      significado:
        'Este tipo de muestra consiste en la recolección de muestras simples, en diferentes puntos de manera simultánea, que posteriormente son mezcladas. En caso de presentarse variaciones de caudal en los puntos de muestreo, se debe tener en cuenta para que el volumen aportado sea proporcional al caudal medido durante la toma de la muestra. (Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM], 2017).',
    },
    {
      termino: 'Muestra disturbada',
      significado:
        'Muestras obtenidas del terreno sin ningún intento de preservar la estructura del suelo; es decir las partículas del suelo se recogen “sueltas” y se dejan mover unas en relación con otras (NTC 4113-1).',
    },
    {
      termino: 'Muestra no disturbada',
      significado:
        'Muestras obtenidas del terreno usando un método diseñado para preservar la estructura del suelo; es decir, se usa equipo de muestreo especial, de tal forma que no se deja que las partículas y los vacíos cambien con respecto a la distribución existente en el terreno antes del muestreo. (NTC 4113-1).',
    },
    {
      termino: 'Perfil del suelo',
      significado:
        'Exposición vertical de horizontes de un suelo individual que son el resultado de la edafogénesis durante el período de formación del suelo (NTC 3656).',
    },
    {
      termino: 'Suelo contaminado',
      significado:
        'Es aquel que, por acción natural y principalmente antrópica, recibe sustancias extrañas de tipo sólido, líquido o gaseoso, que limitan, o pueden limitar, el crecimiento de las plantas y afectan desfavorablemente la biota edáfica, la vida animal y la salud humana. (NTC 3656).',
    },
  ],
  complementario: [
    {
      tema: 'Factores que influyen en la representatividad',
      referencia:
        'La Prensa Austral. (2020, 12 julio). Trabajador con graves quemaduras químicas y su lucha por volver a ver. ',
      tipo: 'Artículo',
      link:
        'https://archivo.laprensaaustral.cl/titular1/trabajador-con-graves-quemaduras-quimicas-y-su-lucha-por-volver-a-ver/',
    },
    {
      tema: 'Factores que influyen en la representatividad',
      referencia:
        'Safeplus. (2015, 3 diciembre). BPL / Buenas Prácticas de Laboratorio de la OCDE [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/oXwLNsi6tAU',
    },
    {
      tema: 'Factores que influyen en la representatividad',
      referencia:
        'Superintendencia de Riesgos del Trabajo. (2016, 2 diciembre). El etiquetado según el Sistema Globalmente Armonizado (SGA) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/lDv9Cptgio8',
    },
    {
      tema: 'Factores que influyen en la representatividad',
      referencia:
        'Medicina Laboral. (2018, 21 agosto). ¿Qué es el Sistema Globalmente Armonizado del Decreto 1496 de 2018? [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/rSZ3E7_JChk',
    },
    {
      tema: 'Materiales de laboratorio',
      referencia:
        'Ciencias UTP. (2018a, 25 marzo). Laboratorio N°1: Introducción a los materiales y mediciones - Parte 1 [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/KbuSX-iglXA',
    },
    {
      tema: 'Materiales de laboratorio',
      referencia:
        'Ciencias UTP. (2018b, marzo 25). Laboratorio N°1: Introducción a los materiales y mediciones - Parte 2 [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/BQ71Al120Vs',
    },
    {
      tema: 'Reactivos y soluciones',
      referencia:
        'Echavarria, S. (2012, 28 agosto). Disoluciones Químicas [Vídeo]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/GrQvY70Z-1s',
    },
    {
      tema: 'Factores que afectan la solubilidad',
      referencia:
        'Profe en c@sa. (2013, 22 septiembre). Solubilidad [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/6SF8bc1oiIE',
    },
    {
      tema: 'Balance de ecuaciones y pasos para balanceo por tanteo',
      referencia:
        'Emmanuel Asesorías. (2017, 24 agosto). Balanceo por tanteo (muchos ejemplos paso a paso) [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/blrrI4LARGo',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
