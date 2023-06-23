<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Sistema internacional de medidas y notación científica 

    p(data-aos="fade-down") Cuando se cuenta al medir, lo que estamos haciendo es comparar dos cantidades.  Por ejemplo, cuando se necesita saber cuál es la longitud de una ventana, lo que se hace es comparar la longitud de una regla o metro.
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7.my-3
        .bg15.p-2.mb-4(data-aos="flip-down")
          .row.justify-content-center.align-items-center        
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/87.svg', alt='') 

            .col-10
              p(data-aos="fade-down").mb-0 Medir es seccionar determinada cantidad en partes iguales usando otra cantidad que sirva de referencia para compararla y contarla.  Por ejemplo, en caso de querer saber la cantidad de agua con la que se llena una piscina. Para ello se tiene un balde, o cubeta, y una fuente de agua. Lo que se hace es empezar a llenar cubetas de agua y vaciar su cantidad dentro de la piscina varias veces.

        .bg15.p-2(data-aos="flip-down")
          .row.justify-content-center.align-items-center        
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.svg', alt='') 

            .col-10
              p(data-aos="fade-down").mb-0 Al contar el número de veces que se llena y vacía la cubeta dentro de la piscina, también se habrá hecho una medición de cuánta agua necesita la piscina para quedar llena.             
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='') 


    Separador 
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 8.1 Unidades de medición 
    .row.justify-content-center.align-items-start.mb-5 
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')               
      .col-lg-8.my-3
        p(data-aos="fade-down") Sería muy complejo que se mida las cantidades, las longitudes, los pesos, entre otros, con lo que nos pareciera, ya que cada uno tendría un parámetro distinto y no habría un acuerdo universal para establecer cálculos precisos sobre algo.  

        p(data-aos="fade-down").mb-0 Es por ello por lo que se crearon las unidades de medida, con el fin de tener un parámetro de referencia sobre las cantidades, magnitudes y demás en todo el mundo.            

    Separador 
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 8.2 El sistema internacional de unidades y notación científica
    .row.justify-content-center.align-items-start.bg8.mb-5.bradlt 
      .col-lg-6.p-0          
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')              
      .col-lg-6.p-3
        p(data-aos="fade-down") El Sistema Internacional de Unidades se basa en dos tipos de magnitudes físicas. Las siete que toma como fundamentales son:
        ul.lista-ul.fa-ul.mb-0.mt-3.ps-4(data-aos="fade-down")
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Longitud]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Tiempo]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Masa]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Intensidad de corriente eléctrica]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Temperatura]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Cantidad de sustancia]
          li 
            i.fas.fa-check.c2
            p.mb-0 #[b Intensidad luminosa ]

    p(data-aos="fade-down").mb-5 Y por otro lado existen las derivadas, que son las restantes y que pueden ser expresadas con una combinación matemática de las anteriores. Las más frecuentes son: superficie, volumen, velocidad, aceleración, densidad, frecuencia, periodo, fuerza, presión, trabajo, calor, energía, potencia, carga eléctrica, diferencia de potencial, potencial eléctrico, resistencia eléctrica, etcétera.  

    Separador 
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 8.3 Sistema de unidades: CGS, MKS, SI, inglés

    p(data-aos="fade-down").mb-5 Un sistema de unidades es un conjunto consistente de unidades de medida. Definen un conjunto básico de unidades de medida a partir del cual se derivan el resto. Existen varios sistemas de unidades: 

    .row.justify-content-center.mb-5
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.png', alt='')

      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
            h5.mb-3 Sistema Internacional de Unidades o SI: 
            p.mb-0  Es el sistema más usado. Sus unidades básicas son: el metro, el kilogramo, el segundo, el ampere, el kelvin, la candela y el mol.      

          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
            h5.mb-3 Sistema Métrico Decimal: 
            p.mb-0 Primer sistema unificado de medidas.   

          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
            h5.mb-3 Sistema Cegesimal o CGS:  
            p.mb-0 Denominado así porque sus unidades básicas son el centímetro, el gramo y el segundo.   

          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
            h5.mb-3 Sistema Técnico de Unidades: 
            p.mb-0 Derivado del sistema métrico con unidades del anterior, actualmente este sistema está en desuso.    

          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/93.svg', alt='')
            h5.mb-3 Sistema Inglés:  
            p.mb-0 Aún utilizado en los países anglosajones, principalmente en Estados Unidos. Muchos de ellos lo están intentando reemplazar por el Sistema Internacional de Unidades.     

    p(data-aos="fade-down").mb-5 Es así como en Colombia el Instituto Nacional de Metrología ha establecido que en el país se debe utilizar el #[b Sistema Internacional de Unidades] (abreviado SI del francés: #[i Le Système International d’Unités]), también denominado Sistema Internacional de Medidas; es el nombre que recibe el sistema de unidades que se usa en la mayoría de los países y es la forma actual del sistema métrico decimal.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg16.p-4
        ol.lista-ol--cuadro.fa-ul.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 #[b El SI también es conocido como sistema métrico], especialmente en las naciones en las que aún no se ha implantado para su uso cotidiano. Fue creado en 1960 por la Conferencia General de Pesos y Medidas, que inicialmente definió seis unidades físicas básicas. En 1971, se añadió la séptima unidad básica, el mol. 
              
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 #[b Una de las principales características, y que constituye la gran ventaja del SI], es que sus unidades están basadas en fenómenos físicos fundamentales. La única excepción es la unidad de la magnitud masa, el kilogramo, que está definida como la masa del prototipo internacional del kilogramo o aquel cilindro de platino e iridio almacenado en una caja fuerte de la Oficina Internacional de Pesos y Medidas. (Universidad de Panamá, s.f.) 

          li.mb-0 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 #[b Las unidades del SI son la referencia internacional de las indicaciones de los instrumentos de medida] y a las que están referidas a través de una cadena ininterrumpida de calibraciones o comparaciones. Esto permite alcanzar la equivalencia de las medidas realizadas por instrumentos similares, utilizados y calibrados en lugares apartados, y por ende asegurar, sin la necesidad de ensayos y mediciones duplicadas, el cumplimiento de las características de los objetos que circulan en el comercio internacional y su intercambiabilidad 

    Separador 
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 8.4 Conversiones de unidades 

    p(data-aos="fade-down") La conversión de unidades es la transformación de una unidad en otra. Un método para realizar este proceso es el uso de los factores de conversión y las, muy útiles, tablas de conversión. Bastaría multiplicar por una fracción (factor de conversión) y el resultado es otra medida equivalente en la que han cambiado las unidades.

    p(data-aos="fade-down").mb-5 Cuando el cambio de unidades implica la transformación de varias unidades se pueden utilizar varios factores de conversión, uno tras otro, de forma que el resultado final será la medida equivalente en las unidades que se busca. Por ejemplo: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.bg-17.p-4.text-center  
        h5(data-aos="fade-down").mb-0 Si queremos pasar 8 metros a yardas, lo único que tenemos que hacer es multiplicar 8(0.914 yd) = 7.312 yd.

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Factor de conversión.
            p El factor de conversión es una fracción en la que el numerador y el denominador son medidas iguales expresadas en unidades distintas, de tal manera que esta fracción equivale a la unidad. Método efectivo para cambio de unidades y resolución de ejercicios sencillos, dejando de utilizar la regla de tres.         
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/94.png', alt='') 

        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Precisión.
            p Se denomina precisión a la capacidad de un instrumento de dar el mismo resultado en mediciones diferentes realizadas en las mismas condiciones. Esta cualidad debe evaluarse a corto plazo. No debe confundirse con exactitud ni con reproducibilidad.

            p La precisión es un parámetro relevante, especialmente en la investigación de fenómenos físicos, ámbito en el cual los resultados se expresan como un número más una indicación del error máximo estimado para la magnitud. Es decir, se indica una zona dentro de la cual está comprendido el verdadero valor de la magnitud.        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/95.png', alt='')    

        .row.justify-content-center.mt-3
          .col-11 
            h4 Cifras significativas.
            p Son aquellas que tienen significado real o aportan alguna información. Las cifras no significativas aparecen como resultado de los cálculos y no tienen significado alguno. Las cifras significativas de un número vienen determinadas por su error. Son cifras significativas aquellas que ocupan una posición igual o superior al orden o posición del error.  (Facultad de Ingeniería de LUZ, 2018) 

            p Por ejemplo, se considera una medida de longitud que arroja un valor de 5432.4764 m con un error de 0.8 m. El error es por tanto del orden de décimas de metro. Es evidente que todas las cifras del número que ocupan una posición menor que las décimas no aportan ninguna información. En efecto, ¿qué sentido tiene dar el número con precisión de diez milésimas si se afirma que el error es de casi 1 metro? Las cifras significativas en el número serán, por tanto, las que ocupan la posición de las décimas, unidades, decenas, etc, pero no las centésimas, milésimas ni diezmilésimas. 

            p Cuando se expresa un número debe evitarse siempre la utilización de cifras no significativas, puesto que puede suponer una fuente de confusión. Los números deben redondearse de forma que contengan sólo cifras significativas. Se llama redondeo al proceso de eliminación de cifras no significativas de un número.  

        .row.justify-content-center.mt-3
          .col-11 
            h4 Notación científica.
            p.mb-4 La notación científica (o notación índice estándar) es un modo conciso de representar un número utilizando potencias de base diez. Los números se escriben como un producto: a × 10k, (siendo a un número mayor o igual que 1 y menor que 10, y k un número entero). Esta notación se utiliza para poder expresar más fácilmente números muy grandes o demasiado pequeños. La notación científica utiliza un sistema llamado coma flotante, o de punto flotante, en países de habla inglesa y en algunos hispanohablantes. 

            img.img-a.img-t(src='@/assets/curso/temas/96.svg', alt='')

            p.text-end (Algoestadistica, 2011)  

</template>

<script>
export default {
  name: 'Tema8',
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
