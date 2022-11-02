<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Equipos, instrumentos, utensilios en la recepción 
    
    .BGIMG05.p-md-5.p-4
      .row.justify-content-center.mb-5
        .col-lg-10.tarjeta.tarjeta--blanca.p-0(data-aos="flip-up")
          .row.align-items-center
            .col-lg-4.col-8.mb-lg-0.mb-4
              img(src="@/assets/curso/tema2/img01.png")
            .col-lg-8.p-4
              p.mb-0 Existe gran variedad de equipos e instrumentos en la industria cacaotera, que están diseñados para aprovechar al máximo la materia prima reduciendo las pérdidas y maximizando las ganancias. Es muy importante tener en cuenta que en esta industria existen dos tipos de procesamiento, uno #[b artesanal] y el otro #[b industrial], en los cuales se utilizan equipos según sea la intencionalidad del recolector y del productor.
      
      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/temas/img01.png")
        .col
          .h4.ms-5.mb-0 <span style="color:#7D5F54">Maquinaria artesanal</span>
      
      p En las actividades agrícolas en las zonas más alejadas de las grandes ciudades los agricultores y los productores artesanales se ingenian la manera de realizar las actividades más complejas con la ayuda de herramientas rudimentarias para facilitar su labor.

    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img02.svg")
      .col-lg-10
        p.mb-0 La creación artesanal del chocolate ha sido un legado de generaciones y para los productores artesanales se ha convertido en un hábito que se realiza con gusto; gracias a la experiencia adquirida tienen la capacidad de establecer los criterios de calidad del producto sin realizar pruebas muy tecnificadas, adicional a esto hacen uso de fogones de leña, máquinas de moler rústicas, uso de recipientes tallados en madera y empaques más naturales con información básica, sin uso de conservantes y preservantes. 

    .BG05.p-md-5.p-4
      p La comercialización se realiza a baja escala en los pueblos vecinos o contando con mayor suerte en las ciudades intermedias, generando los ingresos necesarios para solventar su negocio, ya que realizan grandes gastos en personal, maquinaria, mercadeo, infraestructura, entre otros gastos.
      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img03.png")
        .col-lg-5.col-10(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img04.png")

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-1.col-2.img01
        img.w-50(src="@/assets/curso/temas/img01.png")
      .col
        .h4.ms-5.mb-0 <span style="color:#7D5F54">Maquinaria industrial</span>
      
    p El avance de los procesos de tecnificación en la agroindustria ha traído consigo el desarrollo de nuevos instrumentos, herramientas y maquinaria para realizar las labores de manera más eficiente y con el menor gasto energético y económico en la mayoría de los casos.
    
    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-secundario.p-4(data-aos="flip-up")
        p.mb-0 La industria cacaotera no es ajena a estos avances, ya que en la actualidad se cuenta con una amplia variedad de maquinaria que facilita las labores de recolección y transformación del grano del cacao en cada subproducto, propendiendo por el aprovechamiento a mayor grado de cada una de las materias primas incluidas en el proceso y con el control por parte de operadores que garanticen el normal funcionamiento de las mismas.

    .row.align-items-center.mb-4
      .col-1.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img05.png")
      .col-lg-10
        p.mb-0 Entre la maquinaria industrial diseñada para la producción de chocolate y manejo del cacao se encuentran las siguientes:
      
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        .BG01.p-4
          SlyderB(:datos="datosSlyder")

    p En el procesamiento del cacao aparte de las maquinarias se utilizan algunos instrumentos que permiten el desarrollo efectivo de las fases o etapas (recepción,  limpieza y clasificación, tostión, descascarillado, moldeado, mezcla y temperado, enfriamiento, molienda, refrigeración, maduración y empaque). Cada etapa se apoya en instrumentos de control que les permite identificar, reconocer o verificar las condiciones en las cuales se encuentra el producto.

    .BGIMG06.p-md-5.p-4
      .row.justify-content-center.mb-4
        .col-lg-10.mb-4
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img14.jpg')})`}"
            )(data-aos="fade-right")
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p.mb-0 Cuando la materia prima llega a los centros de acopio de las diferentes zonas productoras es sometido a un control de calidad, en el que se determina si ha recibido un proceso de beneficio de manera adecuada o no; lo primero que se hace es verificar el tipo de producto, variedad, calidad y limpieza del producto a recibir, en este momento se rotula con las especificaciones de llegada o ingreso, luego en una balanza se pesa el producto y se aplican las respectivas etiquetas de identificación con el nombre del productor y si tiene alguna certificación (orgánico) o es un producto convencional, tipo de producto y variedad.
        .col-lg-10.mb-4
          p.mb-0 Es posible que se requiera hacer una prueba de sabor y si esto se hace, se utiliza una cuchara para la toma de la muestra. Finalmente, y antes de continuar con el almacenamiento del producto o llevarlo a la siguiente etapa del proceso, los materiales y las herramientas utilizados deben limpiarse y desinfectarse después de su uso.
        .col-lg-8.d-none.d-lg-flex(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img15.png")
        .col-lg-8.d-lg-none.d-flex(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img16.png")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '<span style="color:#7D5F54">Tostadora de granos</span>',
        texto:
          'La función principal es la eliminación de la humedad mediante la aplicación de vapor que calienta el grano y finalmente lo seca.',
        imagen: require('@/assets/curso/tema2/img06.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Molino de granos</span>',
        texto:
          'El molino es una máquina que por medio de la fricción de dos discos muele el grano de cacao limpio y deja un producto menos denso.',
        imagen: require('@/assets/curso/tema2/img07.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Descascadora de cacao</span>',
        texto:
          'Su función principal es la de quitarle la cáscara al grano de cacao por medio del rompimiento, de acuerdo con el control previo realizado.',
        imagen: require('@/assets/curso/tema2/img08.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Mezcladora de cacao</span>',
        texto:
          'Es usada para homogeneizar la mezcla de varios ingredientes, entre ellos el cacao para obtener finalmente el chocolate.',
        imagen: require('@/assets/curso/tema2/img09.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Monitor de granos</span>',
        texto:
          'Es el encargado de escoger el fruto de acuerdo con las especificaciones establecidas en la etapa preoperacional.',
        imagen: require('@/assets/curso/tema2/img10.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Refinador o conchador</span>',
        texto:
          'Mezcla los ingredientes que llevará su chocolate incorporando las grasas, azúcares y emulsionantes de forma homogénea, refinando las partículas de la masa de chocolate y finalmente, realiza el conchado eliminando los ácidos acéticos no deseables de la pasta refinada.',
        imagen: require('@/assets/curso/tema2/img11.png'),
      },
      {
        titulo:
          '<span style="color:#7D5F54">Mezclador con cámara de aceite</span>',
        texto:
          'Realiza la mezcla de los ingredientes del chocolate llevando a cabo un control de la temperatura.',
        imagen: require('@/assets/curso/tema2/img12.png'),
      },
      {
        titulo: '<span style="color:#7D5F54">Prensa para cacao</span>',
        texto:
          'Mediante el uso de esta máquina se extrae la manteca de cacao proveniente del licor del cacao.',
        imagen: require('@/assets/curso/tema2/img13.png'),
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
