<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Balance de ecuaciones y pasos para balanceo por tanteo
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.my-3
        .bg18.p-2.mb-4(data-aos="flip-down")
          .row.justify-content-evenly.align-items-center        
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/97.svg', alt='') 

            .col-11
              p(data-aos="fade-down").mb-0 Una reacción química es el proceso en el cual ocurre un cambio químico; las sustancias o elementos iniciales se llaman reactivos y las que resultan del proceso de transformación se les llama productos. Una ecuación química es la representación simbólica de las reacciones. Cuando se escribe una ecuación se emplean distintos símbolos o fórmulas de compuestos:

    .row.mb-5.text-center
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/98.svg' alt='AvatarTop')

          .tarjeta.color-primario.bgava.h-100
            .p-4
              h4.text-center Subíndices
              p indican la cantidad de átomos que hay de cada elemento en la ecuación.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/99.svg' alt='AvatarTop')

          .tarjeta.color-primario.bgava.h-100
            .p-4
              h4.text-center Coeficientes
              p indican la proporción que se debe guardar para que se cumpla la ley de la conservación de la materia (se escriben antes de la fórmula de los elementos o compuestos e indican el número de moles). (Emmanuel Asesorías, 2017)     

    .row.justify-content-center.mb-5
      .col-lg-4.p-0          
        img(data-aos="zoom-in")(src='@/assets/curso/temas/100.png', alt='')              
      .col-lg-8
        p(data-aos="fade-down") #[b Balanceo de la ecuación por el método de tanteo:] es el método para balancear ecuaciones químicas que consiste en que cada miembro de la ecuación química tenga la misma cantidad de átomos, tanto de reactivos como de productos. Para equilibrar ecuaciones, solo se agregan coeficientes a las fórmulas que lo necesiten, pero no se cambian los subíndices. (Emmanuel Asesorías, 2017)  

        p(data-aos="fade-down").mb-0 Habiendo comprendido lo que es el balanceo de una ecuación, se deben tener en cuenta los siguientes elementos:  

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg13")
      .row.justify-content-center.align-items-center(titulo="Pasos para el balanceo por tanteo") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/101.svg', alt='')

        .col 
          ul.lista-ul
            li 
              i.fas.fa-check.c1
              p.mb-0 Es importante identificar los elementos “no compuestos” que se encuentren en la ecuación y anotar los elementos que se hallaron.
            li 
              i.fas.fa-check.c1
              p.mb-0 Registrar el número de átomos que tienen los elementos, multiplicando el coeficiente por el subíndice.
            li 
              i.fas.fa-check.c1
              p.mb-0 Verificar en cuáles elementos no se tiene la misma cantidad de átomos.
            li 
              i.fas.fa-check.c1
              p.mb-0 Incluir coeficientes enteros “no decimales”, donde sean necesarios para balancear la ecuación.
            li 
              i.fas.fa-check.c1
              p.mb-0 Multiplicar los átomos de cada elemento indicados en su subíndice, por su coeficiente, y anotarlos.
            li 
              i.fas.fa-check.c1
              p.mb-0 Es importante, cuando no hay un coeficiente enfrente de la fórmula, se toma como uno.
            li 
              i.fas.fa-check.c1
              p.mb-0 En caso de que un elemento se repita más de 1 vez en los reactivos o productos, sumar los resultados de sus multiplicaciones y anotarlos.

      .row.justify-content-center.align-items-center(titulo="Desarrollo inicial de una ecuación") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/102.svg', alt='')

        .col 
          ul.lista-ul
            li 
              i.fas.fa-check.c1
              p.mb-0 Si se observa que los átomos no están balanceados, se deben poner y cambiar coeficientes enteros “no decimales”, donde sean necesarios para balancear la ecuación.

            li 
              i.fas.fa-check.c1
              p.mb-0 Los coeficientes afectan a todos los elementos de la fórmula, por lo tanto, también se multiplican por sus subíndices.

            li 
              i.fas.fa-check.c1
              p.mb-0 Cuando quede el mismo número de átomos, tanto en los reactivos como en los productos, entonces la ecuación ya quedó balanceada. 

      .row.justify-content-center.align-items-center(titulo="Desarrollo final de una ecuación") 
        .col-auto
          img.img-a.img-t(src='@/assets/curso/temas/103.svg', alt='')
        
        .col
          ul.lista-ul
            li 
              i.fas.fa-check.c1
              p.mb-0 Finalmente, la ecuación queda balanceada y se lee de la siguiente manera: un mol de ácido fosfórico reacciona con tres moles de hidróxido de potasio produciendo un mol de fosfato de potasio y tres moles de agua. (Emmanuel Asesorías, 2017)

            li 
              i.fas.fa-check.c1
              p.mb-0 Es muy importante tener claros estos conceptos, para ello se invita a consultar el siguiente material audiovisual para complementar los conceptos anteriormente vistos. 



</template>

<script>
export default {
  name: 'Tema9',
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
