<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 11
      h1 Medios de cultivo

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7.my-md-3
        p(data-aos="fade-down") El medio de cultivo constituye el aporte de nutrientes indispensables para el crecimiento de los microorganismos. La composición precisa dependerá de la especie que se quiera cultivar, porque las necesidades nutricionales varían considerablemente. Hay microorganismos muy poco exigentes, que crecen bien en medio de laboratorios normales, y microorganismos muy exigentes, que necesitan determinadas sustancias, como vitaminas, suero o sangre, para crecer.

        p(data-aos="fade-down") (Universidad Miguel Hernández de Elche, s. f.) 
        
      .col-lg-5.my-md-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/120.png', alt='')

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg13")
      .row.justify-content-center.align-items-center(titulo="Existen medios cuya composición permite el crecimiento de") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/121.svg', alt='')

        .col 
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check.c1
              | Un gran número de especies (agar nutritivo, caldo ordinario, agar de Sabouraud).

            li 
              i.fas.fa-check.c1
              | Determinados microorganismos (impidiendo el desarrollo de otros), son los denominados medios selectivos.

            li 
              i.fas.fa-check.c1
              | Otros, en cambio, se desarrollan para el estudio de determinadas pruebas fisiológicas o test bioquímicos (utilización de citratos, acidificación a partir de azúcares, etc.).
   

      .row.justify-content-center.align-items-center(titulo="Los medios de cultivo poseen una serie de componentes") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/122.svg', alt='')

        .col 
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check.c1
              | Indispensables: se incluye el agua, nutrientes orgánicos (hidratos de carbono, aminoácidos, vitaminas, etc.) y nutrientes inorgánicos (P, Fe, N, Mg, S, etc.).

            li 
              i.fas.fa-check.c1
              | Alternativos: sustancias isosmotizantes (NaCl), agente solidificante (agar-agar), tampones, indicador de pH, etc.

      .row.justify-content-center.align-items-center(titulo="Durante las prácticas se van a manejar medios de cultivo de composición muy variada y de tres tipos diferentes en cuanto a consistencia: medios sólidos, semisólidos y líquidos.") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/123.svg', alt='')

        .col 
          p.mb-0 Este último aspecto es importante a la hora de la preparación de estos. Aunque los medios artificiales o sintéticos se pueden preparar a partir de sus componentes individuales, se pueden adquirir comercialmente como medios deshidratados a los que solamente hay que añadir la cantidad de agua necesaria. 

      .row.justify-content-center.align-items-center(titulo="El fabricante indica la composición, la caducidad y la cantidad que debe pesarse por cada litro a preparar, e incluso cómo debe esterilizarse.") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/124.svg', alt='')

        .col 
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-check.c1
              | Objetivos concretos de la práctica.

            li 
              i.fas.fa-check.c1
              | Preparar medios de cultivo como soporte y fuente de nutrientes para el desarrollo de los microorganismos in vitro.

            li 
              i.fas.fa-check.c1
              | Manejar los instrumentos de uso rutinario, a la vez que imprescindibles, en el laboratorio de microbiología.

            li 
              i.fas.fa-check.c1
              | Hacer un primer acercamiento a la manipulación de microorganismos. Adquirir la idea de la importancia del trabajo en condiciones de esterilidad y las técnicas más comunes para realizarlo.
                                               
          p (Universidad Miguel Hernández de Elche, s. f.)
</template>

<script>
export default {
  name: 'Tema11',
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
