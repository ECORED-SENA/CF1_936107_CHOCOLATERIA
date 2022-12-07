export default {
  global: {
    componenteFormativo: 'Planificación para la recepción del cacao',
    descripcionCurso:
      'Este componente de formación contiene la información de equipos y procedimientos a realizar en el manejo del cacao posterior a la etapa de cosecha, así como la normatividad aplicable en materia ambiental, sanitaria y de seguridad y salud en el trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Equipos, instrumentos, utensilios en la recepción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos, características y manejo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Marco normativo',
      referencia:
        'ColombiaMide. (2021). <em>Nuevas normas o estándares disponibles para las cadenas de cacao y aguacate Hass, aprobados por ICONTEC y gestionados por ColombiaMide. ColombiaMide</em>.',
      tipo: 'Página <em>web</em>',
      link:
        ' https://colombiamide.inm.gov.co/nuevas-normas-o-estandares-disponibles-para-las-cadenas-de-cacao-y-aguacate-hass-aprobados-por-icontec-y-gestionados-por-colombiamide/',
    },
    {
      tema: 'Marco normativo',
      referencia:
        'Federación Nacional de Cacaoteros. (2019). <em>Marco Jurídico</em>. Fedecacao.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.fedecacao.com.co/marcojuridico',
    },
    {
      tema: 'Equipos, instrumentos, utensilios en la recepción',
      referencia:
        'Revista “Tierra Productiva”. (2021). ¿<em>Cómo se realiza un control de calidad en el cacao antes de la compra</em>? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uJXPI7vgjh4',
    },
    {
      tema: 'Tipos, características y manejo',
      referencia:
        'Longer Nuts Machinery. (2022). <em>Maquinaria para procesar cacao, equipo para procesar cacao</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AXfvwV6QGk',
    },
  ],
  glosario: [
    {
      termino: 'Cacao',
      significado:
        'Fruto extraído de las mazorcas maduras de los árboles de la especie Theobroma cacao L. de la familia de las esterculiáceas, fermentado o no y secado.',
    },
    {
      termino: 'Cosecha',
      significado:
        'Es la recolección de frutos, semillas o partes del programa de origen de interés comercial. La cosecha marca el final del crecimiento, el fin del ciclo productivo del cultivo y el inicio de la preparación o acondicionamiento para el mercado.',
    },
    {
      termino: 'Cultivo de cacao',
      significado:
        'Sistema de producción  conformado fundamentalmente por árboles de la especie cacao.',
    },
    {
      termino: 'Fedecacao',
      significado: 'Federación Nacional de Cacaoteros.',
    },
    {
      termino: 'NTC',
      significado: 'Norma Técnica Colombiana.',
    },
    {
      termino: 'Pasilla',
      significado:
        'Se refiere a los granos de cacao que se encuentran aplastados, son delgados y difíciles de separar cuando se cortan, generalmente a causa de una mala fermentación.',
    },
    {
      termino: 'Sitio de acopio en campo',
      significado:
        'Lugar en la finca donde se reúne temporalmente el producto antes de ser llevado al sitio de la poscosecha.',
    },
    {
      termino: 'Unidad de producción agrícola',
      significado:
        'Área compuesta por campos, parcelas, terrenos, invernaderos, edificaciones, etc., donde se llevan a cabo las actividades de producción.',
    },
    {
      termino: 'USAID',
      significado:
        'Agencia de los Estados Unidos para el Desarrollo Internacional.',
    },
  ],
  referencias: [
    {
      referencia: 'Concepto.de. (s.f.).  Cacao. Concepto.de.',
      link: 'https://concepto.de/cacao/',
    },
    {
      referencia:
        'Cubillos, G., Merizalde, G. & Correa, E. (2008). <em>Manual de beneficio del cacao para técnicos, profesionales del sector agropecuario y productores. Secretaría de Agricultura de Antioquia, Compañía Nacional de Chocolates S.A.S</em>., Corporación para investigaciones biológicas (CIB), Grupo GIEM Universidad de Antioquia.',
    },
    {
      referencia:
        'Federación Nacional de Cacaoteros. (2015). <em>Mejoramiento tecnológico del cultivo de cacao</em>. Fedecacao.',
    },
    {
      referencia:
        'Federación Nacional de Cacaoteros. (2019). <em>Marco Jurídico</em>. Fedecacao.',
      link: 'https://www.fedecacao.com.co/marcojuridico',
    },
    {
      referencia:
        'ICONTEC. (2010). <em>Norma Técnica Colombiana NTC 5811</em>. ICONTEC.',
      link: 'https://docplayer.es/54756325-Norma-tecnica-colombiana-5811.html',
    },
    {
      referencia:
        'INDCRESA Productos del cacao. (s.f.). <em>Proceso del cacao</em>. INDCRESA',
      link: 'https://indcresa.com/proceso-del-cacao/',
    },
    {
      referencia:
        'Páez, W. (2017). <em>Propuesta de mejora del proceso de transformación del cacao en Apomd para la disminución de su desperdicio</em>.  Universidad de La Salle.',
      link:
        'https://ciencia.lasalle.edu.co/cgi/viewcontent.cgi?article=1025&context=ing_industrial',
    },
    {
      referencia:
        'PROAmazonía. (2020). <em>Manual de procesos de centro de acopio</em>. PROAmazonía.',
      link:
        'https://www.proamazonia.org/wp-content/uploads/2021/05/Manual_cacao_2021.pdf',
    },
    {
      referencia:
        'USAID. (s.f.). <em>Análisis de la cadena productiva del cacao en Colombia</em>. USAID.',
      link: 'https://pdf.usaid.gov/pdf_docs/PA00W6GT.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Karly Julieth Cediel Martínez',
        cargo: 'Experta temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba',
        cargo: 'Revisora metodológico y pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
