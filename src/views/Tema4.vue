<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Equipos de laboratorio

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7.my-md-3
        p(data-aos="fade-down") Todo análisis químico, físico o microbiológico de una muestra requiere la manipulación de diversos equipos o instrumentos de laboratorio. La química analítica es la rama de la química que estudia, desarrolla y mejora los métodos e instrumentos, con el fin de estudiar la composición química de la materia.     

        p(data-aos="fade-down") Se divide en química analítica cuantitativa, que se centra en desarrollar métodos para determinar la concentración de cada una de las sustancias que están presentes en una muestra, y la química analítica cualitativa, que se encarga de identificar cada una de las sustancias que forman una muestra.        
      .col-lg-5.my-md-3
        img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')
        

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/39.svg' alt='AvatarTop')

          .tarjeta.color-primario.bgava.h-100
            .p-4
              h4.text-center Instrumento
              p Cuando se realiza un muestreo, este debe ser llevado a un instrumento para su análisis. No es un paso directo, al contrario, requiere una serie de pasos de alistamiento de la muestra para su posterior valoración instrumental.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/40.svg' alt='AvatarTop')

          .tarjeta.color-primario.bgava.h-100
            .p-4
              h4.text-center Análisis químico
              p Dentro de la química analítica, se incluye el análisis químico, que es la parte práctica que utiliza los métodos de análisis para solucionar los problemas relacionados con la composición química de la materia. Esta parte práctica se emplea en muchos ámbitos, pudiendo destacarse el papel que juega en la industria, donde se emplea en los controles de calidad, ya sea de materias primas o de productos.

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/41.svg' alt='AvatarTop')

          .tarjeta.color-primario.bgava.h-100
            .p-4
              h4.text-center Términos utilizados en la química analítica
              p #[b Muestra:] es la parte de la materia que nos interesa analizar.
              p #[b Analito:] sustancia química que se analiza.
              p #[b Técnica:] forma de obtener información sobre el analito.
              p #[b Método: ]grupo de técnicas aplicadas al análisis de una muestra.               
    
    .bg4.pt-4
      .ps-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Etapas del proceso analítico total    
      img.img-a.img-t.mb-4.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='') 


      img.img-a.img-t.mb-4.d-block.d-lg-none(data-aos="zoom-in")(src='@/assets/curso/temas/10_1.svg', alt='')    

      figcaption Nota. Tomada de https://es.calameo.com/read/002446339add36a3f7d24

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Métodos clásicos       
    p(data-aos="fade-down").mb-5 Los métodos clásicos se basan en las propiedades químicas de la sustancia que se analiza, es decir, del analito. Algunos de estos métodos son:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-center.align-items-center.bg1.p-3.brad           
          .col-lg-4.mb-md-4
            .bgw.bradt.p-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.svg', alt='')

            .bgg.p-2.text-center  
              h5.mb-0(data-aos="flip-down") Marchas analíticas 
          .col-lg-4.mb-md-4
            .bgw.bradt.p-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.svg', alt='')

            .bgg.p-2.text-center  
              h5.mb-0(data-aos="flip-down") Gravimetría 
          .col-lg-4.mb-md-4
            .bgw.bradt.p-4
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.svg', alt='')

            .bgg.p-2.text-center  
              h5.mb-0(data-aos="flip-down") Volumetría 


    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Métodos instrumentales 

    .row.justify-content-center.align-items-start.bg8.mb-5.bradlt 
      .col-lg-5.p-0          
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')              
      .col-lg-7.p-3
        p(data-aos="fade-down") También llamados métodos químicos, se basan en las propiedades químico-físicas de la materia y son:
        ul.lista-ul.ps-5(data-aos="fade-down")
          li 
            i.fas.fa-check.c2
            | Ópticos – espectroscópicos
          li 
            i.fas.fa-check.c2
            | Separación 
          li 
            i.fas.fa-check.c2
            | Electroquímicos
          li 
            i.fas.fa-check.c2
            | Radioquímicos
          li 
            i.fas.fa-check.c2
            | Térmicos 

    p(data-aos="fade-down").mb-5 A continuación, se pueden encontrar gráficas e imágenes que ilustran más y mejor sobre las técnicas espectroscópicas y no espectroscópicas, nuevos conceptos y nuevos elementos técnicos, referentes a los métodos instrumentales y clásicos en el análisis químico. 

    .bg1.p-4.text-center.mb-5(data-aos="flip-down")
      h4(data-aos="fade-down") Sobre los métodos de análisis químicos clásicos e instrumentales
      p(data-aos="fade-down").mb-0.px-5.px-md-1 Observe y analice, atentamente, cada una de las gráficas que le serán mostradas. Intente asimilar la información que en ellas se le presenta. Recuerde tomar nota de todo ello. 

    TabsB.color-secundario.mb-5
      .py-4.py-md-5.bg10(titulo="Técnicas espectroscópicas")
        .px-5
          .row    
            .col-lg-4.my-3
              .bgw.brad.p-3.h-100
                h4.mb-4.g Moleculares:
                h5.mb-3 Absorción 
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría ultravioleta visible
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría de infrarrojo
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría de microondas

                h5.mb-3 Emisión
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría de fluorescencia
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría de fosforescencia                


            .col-lg-4.my-3
              .bgw.brad.p-3.h-100
                h4.mb-4.g Atómicas:
                h5.mb-3 Absorción   
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Espectrofotometría de absorción atómica
                  li 
                    i.lista-ul__vineta
                    | Espestroscopía de absorción de rayos X

                h5.mb-3 Emisión
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Espestroscopía de emisión atómica (llama, arco, chispa, plasma)
                  li 
                    i.lista-ul__vineta
                    | Espestroscopía de fluorescencia atómica
                  li 
                    i.lista-ul__vineta
                    | Espestroscopía de fluorescencia de rayos X
                  li 
                    i.lista-ul__vineta
                    | Espestroscopía de rayos gamma                  


            .col-lg-4.my-3.img-b
              img.img-mov(src='@/assets/curso/temas/46.png', alt='')              


      .py-4.py-md-5.bg10(titulo="Técnicas NO espectroscópicas")
        .px-5
          .row
            .col-lg-8
              .row    
                .col-lg-6.my-3
                  .bgw.brad.p-3.h-100
                    h5.mb-3 Basadas en la dispersión de la radiación: 
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Turbidimetría
                      li 
                        i.lista-ul__vineta
                        | Nefelometría
                      li 
                        i.lista-ul__vineta
                        | Espectroscopía Raman
                .col-lg-6.my-3
                  .bgw.brad.p-3.h-100
                    h5.mb-3 Basadas en la difracción:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Difracción de rayos X
                      li 
                        i.lista-ul__vineta
                        | Difracción de neutrones
                      li 
                        i.lista-ul__vineta
                        | Difracción de electrones 
              .row                                            
                .col-lg-6.my-3
                  .bgw.brad.p-3.h-100
                    h5.mb-3 Basadas en la medida del índice de refracción: 
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Refractometría
                      li 
                        i.lista-ul__vineta
                        | Interferometría          
                .col-lg-6.my-3
                  .bgw.brad.p-3.h-100
                    h5.mb-3 Basadas en la medida de la actividad óptica: 
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Polarimetría
                      li 
                        i.lista-ul__vineta
                        | Espectropolarimetría
                      li 
                        i.lista-ul__vineta
                        | Espectrometría de dicroísmo circular.
            .col-lg-4.my-3.img-b
              img.img-mov(src='@/assets/curso/temas/47.png', alt='')                    

      .py-4.py-md-5.bg10(titulo="Técnicas electroanalíticas")
        .px-5
          .row
            .col-lg-8
              .row    
                .col-lg-6.my-3
                  .bgw.brad.p-3.mb-4
                    ol.lista-ol.mb-0
                      li.mb-0 
                        span.text-bold a. 
                        | #[b Potenciometría]
                        
                  .bgw.brad.p-3
                    ol.lista-ol.mb-0
                      li.mb-0 
                        span.text-bold b. 
                        | #[b Técnicas Voltamperométricas]
                    ol.lista-ol.mb-0.ps-4
                      li.mb-0 
                        span.text-bold i. 
                        | Voltamperometría de barrido lineal
                      li.mb-0 
                        span.text-bold ii. 
                        | Voltamperometría de redisolución
                      li.mb-0 
                        span.text-bold iii. 
                        | Voltamperometría ciclica

                .col-lg-6.my-3
                  .bgw.brad.p-3.mb-4
                    ol.lista-ol.mb-0
                      li.mb-0 
                        span.text-bold c. 
                        | #[b Culombiametría]
                    ol.lista-ol.mb-0.ps-4
                      li.mb-0 
                        span.text-bold i. 
                        | Culombimetria a potencial constante
                      li.mb-0 
                        span.text-bold i. 
                        | Culombimetria a intensidad constante
                      li.mb-0 
                        span.text-bold i. 
                        | Electrogravimetría              
            .col-lg-4.my-3.img-b
              img.img-mov(src='@/assets/curso/temas/48.png', alt='')             

      .py-4.py-md-5.bg10(titulo="Algunos conceptos claros")
        .px-5
          .row
            .col-lg-8
              .row    
                .col-lg-6.my-3
                  .bgw.brad.p-3.mb-4.h-100
                    h5.mb-4 Sensibilidad: 
                    p.mb-0 Cantidad o concentración mínima que se puede determinar. 
                       

                .col-lg-6.my-3
                  .bgw.brad.p-3.mb-4.h-100
                    h5.mb-4 Exactitud: 
                    p.mb-0 Proximidad de una medida a su valor real. 


                .row    
                  .col-lg-6.my-3
                    .bgw.brad.p-3.mb-4.h-100
                      h5.mb-4 Selectividad: 
                      p.mb-0 Interferencia de unas especies químicas en la determinación de otras.
                        

                  .col-lg-6.my-3
                    .bgw.brad.p-3.mb-4.h-100
                      h5.mb-4 Precisión:
                      p.mb-0 Concordancia entre dos o más valores numéricos de resultados obtenidos de forma idéntica.                  
         
            .col-lg-4.my-3.img-b
              img.img-mov(src='@/assets/curso/temas/49.png', alt='')               

      .py-4.py-md-5.bg10(titulo="Ejemplos de conceptos")
        .px-5
          .row
            .col-lg-4.my-3
              .bgg1.p-2 
                h5.mb-0.ps-3 Errores Sistemáticos (Determinados)
              .bgw.bradb.p-3.he
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Tienen calor definido
                  li 
                    i.lista-ul__vineta
                    | Tiene causa asignable
                  li 
                    i.lista-ul__vineta
                    | Tiene igual signo y magnitud
                  li 
                    i.lista-ul__vineta
                    | Afectan a la #[b EXACTITUD]    
                img.mb-4(src='@/assets/curso/temas/hr.svg', alt='')               
                ul.lista-ul.mb-0
                  li 
                    i.lista-ul__vineta
                    | Errores de instrumento
                  li 
                    i.lista-ul__vineta
                    | Errores del método
                  li.mb-0 
                    i.lista-ul__vineta
                    | Errores personales
            .col-lg-4.my-3
              .bgg1.p-2 
                h5.mb-0.ps-3 Errores Aleatorios (Indeterminados)
              .bgw.bradb.p-3.he
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | No tienen signo concreto
                  li 
                    i.lista-ul__vineta
                    | No pueden corregirse
                  li 
                    i.lista-ul__vineta
                    | Afectan a la #[b PRECISIÓN]   
                img.mb-4(src='@/assets/curso/temas/hr.svg', alt='') 
                h5.mb-4 Variables no controladas:
                p.mb-0 Parte inevitable de toda medición física o química.

            .col-lg-4.my-3.img-b
              img.img-mov(src='@/assets/curso/temas/50.png', alt='')

          .row.justify-content-start
            .col-lg-8
              .das
              .row    
                .col-lg-5.my-3
                  .bgw.brad.p-2.j.mb-4.h-100
                    p.mb-0 Errores Crasos ( Esporádicos) 
                .col-lg-1.my-3.img-c
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/f.svg', alt='')
                  img.img-a.img-t.d-block.d-lg-none(src='@/assets/curso/temas/fb.svg', alt='')
                .col-lg-5.my-3
                  .bgw.brad.p-2.j.mb-4.h-100
                    p.mb-0 Resultados Disparatados 
                      
            
</template>

<script>
export default {
  name: 'Tema4',
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
