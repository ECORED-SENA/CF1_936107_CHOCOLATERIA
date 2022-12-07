<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 1
      h1.mb-0 Marco normativo
    
    .BGIMG01.p-md-5.p-4
      p En Colombia existe una amplia normatividad aplicable a las actividades relacionadas con la producción del cacao, debido a que esta actividad genera alrededor de 170.000 empleos directos e indirectos, convirtiéndose así en una industria rentable y de buenos resultados para los productores gracias a la alta demanda de subproductos del cacao.

      .row.justify-content-center.mb-4
        .col-lg-10.BGRT01.p-4.mb-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2
              p.mb-0 La aplicación de la normatividad vigente al sistema productivo es una garantía para la comercialización de los productos finales, porque algunas cadenas de comercialización exigen la presentación de los permisos para la aceptación de los productos, es por ello que la empresa debe cumplir con los estándares nacionales para la implementación del sistema de producción; en caso que la empresa se direccione a la exportación de sus productos deberá consultar la legislación aplicable para la exportación de alimentos y tener en cuenta las exigencias del país al que se envía la producción.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img01.png")
        .col-lg-10.mb-4
          p.mb-0 El gobierno nacional ha legislado en procura de brindar una estabilidad al productor con el objeto de garantizar una competencia sana y garantizar productos de excelente calidad tanto para la comercialización a escala nacional como internacional, apoyándose en legislaciones de aplicabilidad mundial.
        .col-lg-10
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.jpg')})`}"
            )(data-aos="fade-right")
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p.mb-0 La industria del cacao en Colombia está regulada con una serie de normas que tienen como objetivo garantizar las condiciones tanto en el abastecimiento de las materias primas necesarias para cada actividad como en la apertura de los mercados nacionales e internacionales. Dicha normatividad es un compendio entre leyes, resoluciones, decretos, circulares, planes, entre otras, que buscan aunar esfuerzos para el desarrollo del agro en el país.

    .BGM02.px-md-5.px-4.pt-4
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/temas/img01.png")
        .col
          .h3.ms-5.mb-0 <span style="color:#7D5F54">Normatividad ambiental</span>
      
      p En Colombia es una de las más completas del mundo, porque el país ha desarrollado mecanismos de protección de los ecosistemas propendiendo por el desarrollo industrial con la minimización de los impactos generados por las actividades antrópicas. A continuación conozca la importancia de las buenas prácticas en los procesos agrícolas.

      .row.justify-content-center
        .col-lg-10(data-aos="zoom-in")
          .BG01.p-4
            SlyderB(:datos="datosSlyder")
  
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        .BG01.p-4
          p Adicional a la anterior normativa, en Colombia también existen otras leyes de protección a los cultivos de cacao y prevención de actividades agrícolas, como las normas sanitarias y de seguridad y salud en el trabajo, las cuales son muy importantes en esta industria agrícola cacaotera; conozca algunas de  las normas más importantes que están orientadas a la protección del medioambiente, en el manejo de la siembra y cosecha del cacao: 
          SlyderF.mb-5(columnas="col-lg-6")
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img07.svg")
                .col-12.BGR03.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Ley 23 de 1973</span>
                  p.mb-0 Principios fundamentales sobre prevención y control de la contaminación del aire, el agua y el suelo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img08.svg")
                .col-12.BGR04.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Ley 99 de 1993</span>
                  p.mb-0 Crea el Ministerio del Medioambiente y organiza el Sistema Nacional Ambiental SINA.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img20.svg")
                .col-12.BGR03.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Ley 388 de 1997</span>
                  p.mb-0 Ordenamiento territorial municipal, distrital y planes de ordenamiento territorial.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img09.svg")
                .col-12.BGR04.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Ley 491 de 1999</span>
                  p.mb-0 Define el seguro ecológico y delitos contra los recursos naturales y el ambiente y, se modifica el Código Penal.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img07.svg")
                .col-12.BGR03.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Decreto Ley 2811 de 1974</span>
                  p.mb-0 Código nacional de los recursos naturales renovables RNR y no renovables y de protección al medioambiente.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img08.svg")
                .col-12.BGR04.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Decreto 1753 de 1994</span>
                  p.mb-0 Define la licencia ambiental (LA): naturaleza, modalidad y efectos; contenido, procedimientos, requisitos y competencias para el otorgamiento de LA.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img07.svg")
                .col-12.BGR03.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Decreto 2150 de 1995</span>
                  p.mb-0 Reglamenta la licencia ambiental y otros permisos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mx-1
                .col-6
                  img(src="@/assets/curso/tema1/img20.svg")
                .col-12.BGR04.p-sm-4.p-3
                  .h4 <span style="color:#7D5F54">Decreto 1124 de 1999</span>
                  p.mb-0 Por el cual se reestructura el Ministerio del Medioambiente.

    .BGIMG02.px-md-5.px-4.pt-4
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/temas/img01.png")
        .col
          .h3.ms-5.mb-0 <span style="color:#7D5F54">Normatividad sanitaria</span>
      
      p Se crea para propender por la protección de las actividades agrícolas de posibles enfermedades y la expansión de contagios que puedan afectar gravemente las actividades en el campo.
      p.mb-5 Existe un reglamento sanitario internacional RSI, que se ha convertido en una herramienta para la prevención de la propagación de enfermedades infecciosas, el cual fue aprobado en la Resolución WHA58 de 2005 durante la 58° Asamblea Mundial de la Salud. 
      
      .row.justify-content-center.mb-4
        .col-lg-10.mb-4
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}"
            )(data-aos="fade-right")
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p.mb-0 En Colombia la norma más vinculante relacionada con el manejo sanitario es la Ley 9 de 1979, que establece las normas sanitarias para la prevención y el control de los agentes biológicos, físicos o químicos que alteran las características del ambiente.
        .col-lg-10.mb-4
          p El Ministerio de Agricultura Colombiano ha diseñado algunas normas sanitarias frente al manejo, cuidado y conservación de los productos de alimentación, que en este caso están asociadas o son aplicables a la industria y al procesamiento del cacao, estas  se han considerado como oportunas para mitigar y prevenir riesgos alimentarios, además de fomentar #[b Buenas Prácticas Agrícolas] (BPA), las cuales buscan fortalecer el control de las plagas y las enfermedades en los cultivos. Para ampliar esta información se presentan las siguientes normas sanitarias:
        .col-lg-10.mb-4(data-aos="flip-up")
          AcordionA(tipo="b" clase-tarjeta="BGIMG03")
            .row.justify-content-center.align-items-center(titulo="Decretos")
              .col-lg-4.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img11.svg")
              .col-lg-8
                p Decreto 2078 de 2012. Por el cual se establece la estructura nacional de vigilancia de medicamentos y alimentos INVIMA.
                p.mb-0 Decreto 1485 de 2008. Por el cual se transforma el Fondo de estabilización de precios de exportación del cacao en el Fondo de estabilización de precios del cacao.
            .row.justify-content-center.align-items-center(titulo="Resoluciones")
              .col-lg-4.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img12.svg")
              .col-lg-8
                p Resolución 1511 de 2011. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que debe cumplir el chocolate y los productos del chocolate para el consumo humano, que se procese, envase, almacene, transporte, comercialice, expenda, importe o exporte en el territorio nacional.
                p Resolución 1229 de 2013. Por el cual se establece el modelo de inspección, vigilancia y control sanitario para los productos de uso y consumo.
                p.mb-0  Resolución 770 de 2014. Por la cual se establecen las directrices para la formulación, la ejecución, el seguimiento y la evaluación de los Planes nacionales subsectoriales de vigilancia y control de residuos en alimentos.
            .row.justify-content-center.align-items-center(titulo="Circulares")
              .col-lg-4.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img13.svg")
              .col-lg-8
                p Circular 046 de 2014. Lineamientos para la articulación y coordinación de a las actividades de inspección, vigilancia y control relacionadas con alimentos destinados al consumo humano.
                p Circular 031 de 2015. Directrices para la aplicación de la normatividad sanitaria de alimentos de consumo humano.
                p.mb-0 Circular 046 de 2016. Lineamientos complementarios para la articulación y coordinación de las actividades de inspección, vigilancia y control relacionadas con alimentos y bebidas destinados al consumo humano.
            .row.justify-content-center.align-items-center(titulo="Normas Técnicas Colombianas (NTC)")
              .col-lg-4.col-8.mb-4.mb-lg-0
                img(src="@/assets/curso/tema1/img14.svg")
              .col-lg-8
                p NTC 5811:2010.  Buenas prácticas agrícolas para el cacao, la recolección y el beneficio. Requisitos generales.
                p NTC 1252:2021- Cacao en grano. Especificaciones y requisitos de calidad. Adopción modificada de la Norma ISO 2451:2017.
                p NTC 5400:2012. Buenas prácticas agrícolas para frutas, hierbas aromáticas culinarias y hortalizas frescas. Requisitos generales.
                p.mb-0 NTC 5522:2007. Buenas prácticas agrícolas. Trazabilidad en la cadena alimentaria para frutas, hierbas aromáticas culinarias y hortalizas frescas.

    .BGIMG04.p-md-5.p-4.mb-5
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/temas/img01.png")
        .col
          .h3.ms-5.mb-0 <span style="color:#7D5F54">Seguridad y salud en el trabajo</span>
      
      p En las actividades de producción, en la mayoría de los campos se presentan situaciones que pueden afectar leve o gravemente la salud de los trabajadores, es por eso que se hace necesario la implementación de un Sistema de Gestión de la Seguridad y Salud en el Trabajo (#[b SG-SST]), con el objetivo de prevenir las posibles situaciones que se presenten durante la ejecución de las labores de producción y que sean de riesgo para los colaboradores. Conozca la importancia de la implementación del #[b SG-SST] en la industria cacaotera:
      
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10.tarjeta.tarjeta--blanca.p-4
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-lg-7.order-lg-1.order-2
                p La formulación e implementación de un sistema de seguridad y salud en el trabajo (SG-SST) en la industria cacaotera implica el establecimiento de acciones y prácticas seguras en los procesos de producción, desde el momento del cultivo hasta la disposición del producto final.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema1/img15.png")
            .row.justify-content-center.align-items-center
              .col-lg-7.order-lg-1.order-2
                p El programa de Seguridad y salud en el trabajo perteneciente al SG-SST está diseñado para la mejora continua, lo que conlleva a procesos más eficientes y seguimientos más detallados de las actividades realizadas.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema1/img16.png")
            .row.justify-content-center.align-items-center
              .col-lg-7.order-lg-1.order-2
                p El SG-SST determina cuáles actividades pueden poner al trabajador en peligro y de manera casi inmediata implementa las acciones correctivas que sean necesarias para atacar el riesgo.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema1/img17.png")
            .row.justify-content-center.align-items-center
              .col-lg-7.order-lg-1.order-2
                p La implementación del Sistema de gestión de la seguridad y salud en el trabajo es una garantía para los colaboradores en el desarrollo de sus actividades, pero también representa un beneficio alto para la empresa, ya que aporta a la mejora de la calidad y a la disminución de las afectaciones a la infraestructura y al capital humano.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src="@/assets/curso/tema1/img18.png")

    .row.mb-4
      .col-lg-1.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img19.png")
      .col-10
        p.mb-0 La transformación del cacao en sus subproductos alimenticios genera un alto grado de responsabilidad y salubridad en cada una de las actividades desarrolladas, por esta razón los colaboradores de la empresa deberán estar dotados con ropa adecuada y con el  uso del Equipo de Protección Personal (EPP) en las labores que generen algún tipo de riesgo. 
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p La asepsia en la transformación de los productos alimenticios es vital para que el producto garantice su calidad y que el cliente disfrute de un producto bien manufacturado, por esta razón, la aplicación de las buenas prácticas de manufactura y ambientales son una necesidad en la industria cacaotera. 
        p.mb-5 La siguiente tabla presenta algunas normas relacionadas con el SG-SST en la industria del cacao.

        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1
          span Principales normas relacionadas con la SG-SST
        .tabla-b.color-secundario(data-aos="zoom-in")
          table
            thead
              tr
                th(style="background-color: #FCC02D; width: 30%; font-size: 18px").text-center Norma
                th(style="background-color: #FCC02D; width: 70%; font-size: 18px").text-center Concepto
            tbody
              tr
                th.text-center Decreto 614 de 1984
                td Establece las bases para la organización y administración de salud ocupacional en Colombia.
              tr
                th(style="background-color: #FFF6DF;").text-center Decreto 1295 de 1994
                td(style="background-color: #FFF6DF;") Determina la organización del Sistema general de riesgos profesionales.
              tr
                th.text-center Resolución 1016 de 1989
                td Reglamenta la organización y funcionamiento de los programas de salud ocupacional.
              tr
                th(style="background-color: #FFF6DF;").text-center Ley 1562 de 2012
                td(style="background-color: #FFF6DF;") Expide el Sistema general de riesgos laborales.
              tr
                th.text-center Ley 1610 de 2013
                td Regula aspectos sobre las inspecciones del trabajo e imposición de sanciones por el incumplimiento del SGSST.
              tr
                th(style="background-color: #FFF6DF;").text-center Decreto 1443 de 2014
                td(style="background-color: #FFF6DF;") Expide las disposiciones para implementar el Sistema de gestión de seguridad y salud en el trabajo.
              tr
                th.text-center Decreto 472 de 2015
                td Define las multas y las sanciones por el no cumplimiento del Sistema de gestión de seguridad y salud en el trabajo.
              tr
                th(style="background-color: #FFF6DF;").text-center Decreto 1072 de 2015
                td(style="background-color: #FFF6DF;") Expide el decreto único reglamentario del sector trabajo.
              tr
                th.text-center Resolución 4927 de 2016
                td Establece los requisitos para la certificación del curso virtual de las 50 horas del SGSST.
              tr
                th(style="background-color: #FFF6DF;").text-center Decreto 052 de 2017
                td(style="background-color: #FFF6DF;") Establece que a partir del 1° de junio de 2017 se debe sustituir el programa de salud ocupacional por el SGSST.
              tr
                th.text-center Resolución 0312 de 2019
                td Se definen los nuevos estándares mínimos para implementar el SGSST en empresas pequeñas, medianas y grandes.
              tr
                th(style="background-color: #FFF6DF;").text-center Circular 063 de 2020
                td(style="background-color: #FFF6DF;") Establece los lineamientos para la realización del curso de actualización de 20 horas del SGSST cada 3 años. Como requisito para la actualización del curso de 50 horas del SGSST.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En el desarrollo de actividades agrícolas y de producción de subproductos se presentan impactos a las fuentes naturales, ya sea directa o indirectamente.',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        texto:
          'Las autoridades ambientales han intervenido expidiendo grandes cantidades de normas, con el fin de minimizar los impactos que las actividades antrópicas generan a los ecosistemas.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        texto:
          'En la agricultura los aspectos medioambientales son factores importantes que se deben tener muy en cuenta para el éxito de los procesos productivos.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        texto:
          'El manejo adecuado de los recursos y la implementación de las buenas prácticas ambientales garantizan que los impactos generados hacia el ambiente sean menores.',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
