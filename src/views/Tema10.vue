<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 10
      h1 Microorganismos

    p(data-aos="fade-down") En esta sección se verán los microorganismos y sus principales características, tanto sus morfologías como en sus respectivos análisis.      
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.my-3
        .bg18.p-2.mb-4(data-aos="flip-down")
          .row.justify-content-evenly.align-items-center        
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/104.svg', alt='') 

            .col-11
              p(data-aos="fade-down").mb-0 Los microorganismos son aquellos organismos que, por su tamaño reducido, son imperceptibles a la vista. También denominados “microbios”, estos organismos cuentan con una organización biológica muy básica: una proporción importante de ellos cuenta con apenas una única célula. Además, se caracterizan por existir numerosas variedades, de diferentes formas y tamaños. Los organismos unicelulares procariotas y eucariotas, junto con ciertos hongos y algas, componen el universo de los microbios. 
    
    p(data-aos="fade-down") Los microorganismos tienen la capacidad de alterar el medio en el cual se encuentran. Los microorganismos tienen una serie de características en común:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7.my-3
        .bg16.px-5.py-4.md-p-4
          ul.lista-ul.mb-0
            li 
              i.fas.fa-check.c1
              | Su tamaño es tan reducido que son imperceptibles a simple vista.
            li 
              i.fas.fa-check.c1
              | Sus reacciones metabólicas son muy veloces.
            li 
              i.fas.fa-check.c1
              | La relación que mantienen con el medio es intensa.
            li 
              i.fas.fa-check.c1
              | Necesitan agua para metabolizar. 
            li 
              i.fas.fa-check.c1
              | Desarrollan mecanismos de dispersión y de resistencia.
            li 
              i.fas.fa-check.c1
              | Tienen la capacidad de alterar el medio en el cual se encuentran.
            li 
              i.fas.fa-check.c1
              | Se reproducen a una gran velocidad.
            li 
              i.fas.fa-check.c1
              | Su actividad es indispensable para la vida en el planeta.
            li 
              i.fas.fa-check.c1
              | Forman parte de los ciclos biogeoquímicos que se llevan a cabo en la naturaleza.
            li.mb-0 
              i.fas.fa-check.c1
              | Son muy livianos, por lo que se transportan en el aire.                           
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/105.png', alt='') 

    Separador 
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 10.1 Tipos de microorganismos
    p(data-aos="fade-down").mb-5 Dentro de la naturaleza se pueden identificar diferentes tipos de microorganismos. Algunos de ellos son los siguientes:
    
    SlyderF.text-center(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/106.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Virus
            p.mb-0 Son los microbios más básicos y solamente se los puede percibir con microscopios electrónicos. Para reproducirse, deben infectar a otros organismos unicelulares, a los que les inoculan su contenido genético (solo pueden reproducirse en una célula huésped).     

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/107.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Algas cianofíceas
            p.mb-0  Se trata de bacterias de gran tamaño y se caracterizan por hacer fotosíntesis de manera muy similar a las plantas, es decir, oxigénica (desprenden oxígeno).    

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/108.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Hongos
            p.mb-0  Así como la levadura, muchos de los organismos que integran el reino fungi son microscópicos.    

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/109.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Protistas
            p.mb-0 Se trata de microbios unicelulares eucariotas de gran volumen. Por lo general, se desarrollan en ambientes acuáticos, que pueden ser de agua dulce o salada, o en lugares muy húmedos. Aunque algunas variedades desarrollan vidas parasitarias, por lo general, estos organismos depredan a otros microorganismos a la hora de alimentarse.    

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/110.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Arqueas y bacterias
            p.mb-0 Se trata de dos tipos de organismos procariotas y unicelulares, y son los microbios más simples. Conforman el grupo de microbios con mayor presencia en la tierra, se alimentan del hábita en el que se encuentran y su reproducció es a partir de la división de su material genético.

    Separador 
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 10.2 Microorganismos perjudiciales y beneficiosos                               
    p(data-aos="fade-down").mb-5 Los virus solo se pueden reproducir dentro de una célula huésped. 

    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-6.bg19.p-5.my-3(data-aos="fade-right")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/111.png' alt='AvatarTop')
        .row.justify-content-center.mb-4          
          .col-auto.bg9.p-3(data-aos="flip-down")
            h5.mb-0(data-aos="fade-down") Perjudiciales
        p Existen microorganismos que resultan perjudiciales para la salud de las personas porque, al atacar células vitales, pueden causarles enfermedades que, en algunas ocasiones, pueden llevar a la muerte.

        p #[b Bacterias]. Son microorganismos que pertenecen al reino monera, liberan toxinas y pueden sobrevivir dentro o fuera de una célula. Además, son unicelulares y carecen de núcleo. No todas las bacterias son patógenas, algunas pueden ser beneficiosas para la salud o neutrales.

        p #[b Virus]. Estos microbios, que tienen forma espiralada o esférica, solo se pueden reproducir dentro de una célula huésped. Estos microbios, que pueden ser infecciosos, cuentan con un único tipo de ácido nucleico y son siempre patógenos. Los virus nunca pueden ser eliminados con antibióticos y solamente se pueden atacar sus síntomas.

        p #[b Hongos]. Estos microbios pueden generar enfermedades infecciosas y se desarrollan en el exterior de los cuerpos.

        p (Raffino, 2020)  


      .col-lg-6.bg20.p-5.my-3(data-aos="fade-left")
        img.img-a.img-t.mb-4(src='@/assets/curso/temas/112.png' alt='AvatarTop')
        .row.justify-content-center.mb-4          
          .col-auto.bg9.p-3(data-aos="flip-down")
            h5.mb-0(data-aos="fade-down") Beneficiosos
        p Dentro de los microorganismos, también existen variedades que son beneficiosas para la vida, el medio ambiente y la salud del ser humano. A continuación, algunos ejemplos donde los microbios intervienen de forma beneficiosa: 

        p #[b.g Industria alimenticia.] Los microbios juegan un rol fundamental en la producción de ciertos productos. Por ejemplo, el yogur, el queso o la cerveza son el resultado de alimentos fermentados, gracias al accionar de los microbios. En estos casos, los microbios producen ácido láctico que facilita la conservación de los alimentos.

        p #[b.g Cuerpo humano.] Existen microorganismos que participan de ciertos procesos dentro del cuerpo humano, como en la digestión, y hasta actúan en defensa de otros organismos que sí pueden afectar a la salud.

        p #[b.g Basura.] Por medio de ciertos procesos biológicos, como la estabilización o descomposición, los microbios limpian los residuos. Terminan por convertir los residuos en humus o compost.

        p #[b.g Agricultura.] Muchos de los microorganismos que habitan el suelo facilitan la producción agrícola. Ya sea porque actúan como plaguicidas, o bien porque ayudan al crecimiento de las plantas.        

    Separador 
    #t_10_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 10.3 Ejemplos de microorganismos

    p(data-aos="fade-down").mb-5 Los microbios como el Escherichia coli habitan en los intestinos. Algunos de los microorganismos más conocidos y estudiados que pueden ocasionar enfermedades son los siguientes: 

    .row.justify-content-center.align-items-start.mb-3           
      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/113.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Escherichia coli. 
            p.mb-0 Son los microbios causantes de enfermedades como diarrea hemorrágica o insuficiencia renal. Habitan en los intestinos. 

      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/114.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Salmonella.
            p.mb-0 Estos microorganismos ocasionan diversas enfermedades. Buena parte de ellas son diarreicas. Se propaga a través de la orina y las heces.      

    .row.justify-content-center.align-items-start.mb-3           
      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/115.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Streptococcus pneumoniae. 
            p.mb-0 Son los microbios que causan enfermedades como neumonía, sinusitis u otitis, así como también meningitis.

      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/116.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Mycobacterium tuberculosis.
            p.mb-0 En general, afectan el funcionamiento del hígado y del pulmón, pero tienen la capacidad de enfermar a cualquier órgano del cuerpo. Son microbios muy resistentes al frío.

    .row.justify-content-center.align-items-start.mb-3           
      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/117.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Yersinia pestis.
            p.mb-0 Este microbio, que puede ocasionar peste, habita en los roedores, aunque se transmite a través de pulgas.

      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/118.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Bacillus cereus.
            p.mb-0 Este microorganismo ocasiona intoxicaciones, vómitos, diarrea y náuseas. Habita en alimentos y se caracteriza por reproducirse muy fácilmente.

    .row.justify-content-start.align-items-end.mb-3           
      .col-lg-6.brd
        .row.justify-content-center.align-items-stretch           
          .col-lg-6.p-0.my-3
            img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/119.png', alt='') 

          .col-lg-6.bg15.bradrg.p-3.my-3
            h5.mb-3 Treponema pallidum.
            p.mb-0 Este microorganismo se combate con penicilina y se caracteriza por no sobrevivir en el exterior del cuerpo. Además, este microbio ocasiona la enfermedad de transmisión sexual llamada sífilis.
                                
      .col-lg-6.brd
        p (Raffino, 2020)  

</template>

<script>
export default {
  name: 'Tema10',
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
