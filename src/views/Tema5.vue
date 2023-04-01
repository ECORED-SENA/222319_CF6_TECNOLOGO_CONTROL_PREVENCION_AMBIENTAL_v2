<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Materiales de laboratorio
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7.my-md-3
        p(data-aos="fade-down") Los materiales de laboratorio se convierten en las principales herramientas de trabajo en el laboratorio. En esta sección, se identifican los conceptos asociados y principales directrices a emplear en este campo. Es necesario que antes de comenzar cualquier trabajo experimental, el aprendiz conozca el material que se utiliza. Cada uno de los materiales tiene una función y su uso debe ser acorde con la tarea por realizar. La utilización inadecuada de este material da lugar a errores en las experiencias realizadas y aumenta el riesgo en el laboratorio.

        p(data-aos="fade-down") Los materiales de laboratorio se clasifican de la siguiente forma: 
        
      .col-lg-5.my-md-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Volumétrico: 
            p Dentro de este grupo se encuentran los materiales de vidrio calibrados a una temperatura dada. Permite medir volúmenes exactos de sustancias (matraces, pipetas, buretas, probetas graduadas). 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Calentamiento o sostén:
            p Son aquellos que sirven para realizar mezclas o reacciones y que además pueden ser sometidos a calentamiento (vaso de precipitado, erlenmeyer, cristalizador, vidrio de reloj, balón, tubo de ensayo).
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')        
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Equipos de medición: 
            p Es un instrumento que se usa para comparar magnitudes físicas mediante un proceso de medición. Como unidades de medida se utilizan objetos y sucesos previamente establecidos como estándares o patrones, y de la medición resulta un número que es la relación entre el objeto de estudio y la unidad de referencia. Los instrumentos de medición son el medio por el que se hace esta conversión. Ejemplo: balanza, pHmetro, termómetro. 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='')        
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Equipos especiales:  
            p Equipos auxiliares para el trabajo de laboratorio. Ejemplo: centrífuga, estufa, baño termostático, etc. 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='')        
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Diversos equipos: 
            p Es importante tener presente que todo análisis químico, físico o microbiológico de una muestra requiere la manipulación de diversos equipos o instrumentos de laboratorio.

            p (UNPSJB, 2015)
            p (Ciencias UTP, 2018a)
            p (Ciencias UTP, 2018b) 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='')                                                               
    
</template>

<script>
export default {
  name: 'Tema5',
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
