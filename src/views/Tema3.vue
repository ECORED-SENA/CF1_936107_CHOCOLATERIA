<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 3
      h1 Tipos, características y manejo  
    
    .BGIMG01.p-md-5.p-4
      p Antes de realizar la cosecha del cacao se debe tener presente cuál es el momento adecuado para la recolección de los frutos del cacao, porque es una tarea delicada, debido a que es importante conocer cuándo no se puede recolectar las mazorcas, porque si esta actividad se hace sin conocimiento se corre el riesgo que al momento del procesamiento se pierdan sabores y aromas, por ello la recolección se hace cuando la mazorca tiene maduración completa, teniendo sumo cuidado porque estas no maduran al mismo tiempo, así estén en el mismo árbol. Existen vainas de cacao que cuando están maduras pueden ser de color amarillo, otras amarillo verdoso y otras completamente rojas o doradas.

      .row.justify-content-center.mb-4
        .col-lg-10.BGR06.p-lg-5.p-4(data-aos="flip-up")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2
              p Luego, cuando se determina realizar la recolección de la cosecha se debe hacer manualmente porque como se ha dicho anteriormente las vainas de cacao maduran en diferentes momentos y por ello, se necesita tener un amplio conocimiento para comprender la madurez del cacao y así determinar cuáles son sus mejores puntos de madurez, por lo tanto, la recolección mecánica no es posible. 
              p.mb-0 Finalizada la recolección y la primera inspección de calidad del cacao se procede con el almacenamiento de las semillas de cacao y se da el inicio al procesamiento, que consiste en los siguientes pasos:
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src="@/assets/curso/tema3/img01.png")

    .BGIMG02.p-md-5.p-4   
      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/temas/img01.png")
        .col
          .h4.ms-5.mb-0 <span style="color:#7D5F54">Consideraciones generales para el procesamiento del cacao</span>
      
      p Es muy importante cumplir con las siguientes recomendaciones, desde el momento de la recepción hasta la última etapa, es decir, el empaque.

      .row.justify-content-center.mb-4
        .col-lg-10(data-aos="zoom-in")
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img02.svg')
            .row.justify-content-center.align-items-center(x="9%" y="45%" tooltip="Manual de procesos" numero="+")
              .col-lg-3.col-6.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img03.svg")
              .col-lg-8
                .h4 Manual de procesos
                p Conocer el manual de procesos del centro de acopio de cacao.
            .row.justify-content-center.align-items-center(x="91%" y="45%" tooltip="Personas por actividad" numero="+")
              .col-lg-3.col-6.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img04.svg")
              .col-lg-8
                .h4 Personas por actividad
                p Procurar que el número de personas que estén realizando alguna actividad o fase del procesamiento sea una cantidad considerable o la menor posible.
            .row.justify-content-center.align-items-center(x="9%" y="73%" tooltip="Distanciamiento físico" numero="+")
              .col-lg-3.col-6.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img05.svg")
              .col-lg-8
                .h4 Distanciamiento físico
                p Mantener una distancia de mínimo 2 metros con otras personas.
            .row.justify-content-center.align-items-center(x="91%" y="73%" tooltip="Normas de higiene para la manipulación de alimentos" numero="+")
              .col-lg-3.col-6.mb-lg-0.mb-4
                img(src="@/assets/curso/tema3/img06.svg")
              .col-lg-8
                .h4 Normas de higiene para la manipulación de alimentos
                p Vestir ropa de trabajo adecuada, utilizar en todo momento, mientras que se encuentre en el sector de procesamiento, mascarilla, protector visual o facial; cubrir el cabello con cofia o pañoleta y no utilizar anillos, reloj o joyas.
                p Lavarse las manos con agua y jabón, antes y después de realizar alguna actividad.


    p Ha llegado al final del componente formativo, es muy importante que de manera autónoma realice la revisión de los contenidos y amplíe sus conocimientos a través del apoyo del material bibliográfico y complementario.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
