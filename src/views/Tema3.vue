<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1  Factores que influyen en la representatividad

    p(data-aos="fade-down").mb-5 De acuerdo con la Comisión Europea, los factores que relacionan e influyen en la representatividad son los siguientes:

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Estado físico del lote de muestra.  
            p En general los materiales sólidos son heterogéneos, y más cuanto mayor es su extensión, pero no es posible generalizar para un determinado analito, ya que pueden en ocasiones presentar homogeneidad. En lo que se refiere a líquidos y gases, se tiene una idea generalizada de que presentan un mayor grado de homogeneidad, pero en un análisis del agua de un lago, se encuentran grandes diferencias entre las muestras de superficie, las de media altura y las de fondo, así como entre las obtenidas en el centro o las próximas a la orilla o a una zona donde llegan aportes.   
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Número y tamaño de las porciones.  
            p Para cada población, se determina estadísticamente el número mínimo de porciones y su tamaño para que la muestra resulte representativa sin disparar el coste económico y de personal. 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Fluctuaciones estacionales o temporales.  
            p El momento de la toma de muestra puede verse influido por variaciones espacio-temporales producidas por aspectos climatológicos o temporales, temperatura, humedad, presencia de contaminantes o componentes que fluctúen con la hora del día, la época del año, etc. 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/28.png', alt='') 
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Manipulación, almacenamiento y transporte de las muestras.  
            p Durante las operaciones de toma, cuarteo, reducción del tamaño de partícula por molienda, tamizado o envasado de la muestra, o en el posterior transporte y almacenamiento, debe prevenirse que los analitos sufran alteraciones o pérdidas (oxidación, aumento o disminución de la humedad, intercambio de componentes con el recipiente, etc.).

            p (Comisión Europea, 2021)
 
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')                                        
    
    p(data-aos="fade-down").mb-5 Seguidamente, con base en la precisión, exactitud, reproducibilidad y límites de detección necesarios, se establecerán los métodos analíticos a emplear. Es necesario prestar mucha atención a la información que se presenta a continuación.

    .row.justify-content-start.mb-5          
      .col-auto.bg9.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Precisión, exactitud, reproducibilidad y límites de detección

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez fijados los métodos analíticos, con base en la incertidumbre de sus resultados, en las fases tercera y cuarta, empleando métodos estadísticos, se establecerá el número y masa de las muestras, así como el espaciado con que se deben tomar. Se determinará el método de toma de muestras, incluyendo la descripción detallada del procedimiento de obtención, equipo necesario, contenedores a emplear para conservarlas, indicando si se deberán mantener las muestras individuales, o la forma de proceder para preparar la muestra compuesta. También se harán constar los cuidados especiales para preservar las muestras, tales como refrigeración, aditivos, etc., y se establecerán las primeras etapas de tratamiento, especialmente las que contemplan la reducción de la muestra primaria hasta la de laboratorio. (Comisión Europea, 2021)             

    p(data-aos="fade-down") Los códigos a usar en el etiquetado y en el cuaderno de seguimiento de las muestras, así como los aspectos legales y de seguridad del personal que sean de aplicación. 

    p(data-aos="fade-down") Por fin, en la última fase, se redacta el protocolo completo y se recogen todos los aspectos mencionados hasta ahora, y nunca se toma como definitivo, ya que debe estar sometido a revisión continua en función de la experiencia, por si resulta necesario mejorarlo o actualizarlo. 

    p(data-aos="fade-down") En consecuencia, con lo anterior, #[b.bgpg.p-1 ¿Cuánta muestra se debería llevar para realizar el análisis químico, físico y microbiológico?]

    p(data-aos="fade-down").mb-5 El plan de toma de muestra debe incluir la estimación del tamaño de muestra necesario para minimizar los errores aleatorios.

    .row.justify-content-center.align-items-start.bg8.mb-5 
      .col-lg-4.my-3          
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')              
      .col-lg-8.my-3.p-3
        h5(data-aos="fade-down") Va a depender de:
        ul.lista-ul(data-aos="fade-down")
          li 
            i.fas.fa-check.c2
            | La matriz de la muestra.
          li 
            i.fas.fa-check.c2
            | De la distribución del analito.
          li 
            i.fas.fa-check.c2
            | Del grado de homogeneidad.
          li 
            i.fas.fa-check.c2
            | De la magnitud del error exigido.      
          li 
            i.fas.fa-check.c2
            | Para muestras homogéneas en el espacio y el tiempo, dependerá fundamentalmente de la etapa de determinación final y de la concentración del analito, ya que en la muestra final esta deberá superar el límite de cuantificación del método.      
          li 
            i.fas.fa-check.c2
            | Para muestras heterogéneas, como lo menciona la Comisión Europea (2018), es necesario aplicar la estadística. En muchos casos, la complejidad de las muestras hace que un tratamiento estadístico riguroso resulte desproporcionado respecto de los objetivos, por lo que se decide el tamaño de muestra de acuerdo con la experiencia.           
          li 
            i.fas.fa-check.c2
            | En otros casos, como ocurre en la minería, son pocos los analitos que pueden interesar y el estudio estadístico está justificado económicamente por la necesidad de caracterizar un depósito. 
          li 
            i.fas.fa-check.c2
            | En la mayoría de las ocasiones, suelen emplearse métodos estadísticos aproximados con base en la experiencia, así ocurre con el método del coeficiente de variación. 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7.my-3
        p(data-aos="fade-down") En esta misma línea, se requiere establecer el tamaño de la muestra en función del coeficiente de variación.

        p(data-aos="fade-down") El valor del coeficiente de variación V para una serie de muestras viene dado por el cociente entre la desviación estándar (σ) y el valor medio de las muestras, multiplicado por 100.  

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Como lo mencionan García-García et al. (2013), #[b una vez obtenido dicho valor, el tamaño de muestra mínimo se obtiene de la tabla 1, en la que, como se puede observar, al aumentar la irregularidad en la distribución del analito, aumenta el valor de V y también la masa de muestra necesaria.]
            i.fas.fa-quote-right                
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='')              

    TabsB.color-primario.mb-5
      .py-4.py-md-5.bg10(titulo="Espaciado entre muestras" :icono="require('@/assets/curso/temas/33.svg')")
        .px-5
          h5 Espaciado entre muestras
          p Empleando los variogramas, se puede establecer una correlación espacial de la variación de la concentración del analito que interesa y, en función de esa correlación, establecer una representación gráfica (semivariograma experimental), como lo menciona Canchaya-Moya (2005). Con base en ella, se puede determinar la distancia a partir de la que empieza la dispersión de los valores de la concentración, desapareciendo la relación espacial que existía y de esta forma establecer la distancia mínima y máxima entre puntos de muestra en cada dirección, con un ahorro en número de puntos de muestreo considerable respecto de otros métodos; pero, a su vez, el método es muy complejo y requiere un gran número de muestras previas para aplicarlo, por lo que sólo se justifica en caso de evaluaciones de grandes explotaciones. En la mayoría de los casos suele bastar con aplicar el método del coeficiente de variación.
          .row.justify-content-center
            .col-lg-8.my-3
              p #[b Según la Universidad Politécnica de Cartagena (2017)], en función de la anisotropía de la distribución del analito, aumenta el coeficiente de variación y, por consiguiente, se hace necesario disminuir la distancia entre puntos de toma de muestras. Si el espaciado aumenta sobre los valores de la tabla 1, se encuentran muestras no correlacionadas, y, por el contrario, si se emplean unas distancias menores, se ocasiona una sobredensidad de muestreo que conllevará un gasto innecesario en sondeos.

              p En algunas ocasiones, el método, dada su sencillez, puede llevar a unos espacios excesivamente estrechos, aquí es donde la experiencia puede corregir ligeramente el problema en algunas zonas cuando se advierta el sobredimensionado.            
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')              
      .py-4.py-md-5.bg10(titulo="Espaciado entre muestras" :icono="require('@/assets/curso/temas/33.svg')")
        .px-5
          h5 Número de muestras
          p A la hora de abordar el planteamiento de la toma de muestras, los métodos estadísticos ayudan a determinar el número de muestras individuales que es necesario tomar para minimizar la variabilidad de los resultados finales, teniendo en cuenta la homogeneidad o heterogeneidad de la población objeto de la toma de muestras y el error máximo admisible, lo que ayudará a que la operación se realice dentro de un óptimo económico.  
          .row.justify-content-center
            .col-lg-8.my-3
              p Para una distribución normal del analito, si conocemos σ, el número de muestras mínimo #[b N] para un intervalo de confianza dado y un error máximo E viene dado por la expresión:
              h5.mb-4 Dónde:
              h5.mb-4 #[b.v.p-1.px-2 σ] - desviación estándar 
              h5.mb-4 #[b.v.p-1.px-2 Z] - parámetro de población, que se obtiene de tablas para un nivel de probabilidad dado.
              h5 #[b.v.p-1.px-2 E] - error máximo aceptado.

            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/35.svg', alt='')   
          hr.my-4
          .row.justify-content-center
            .col-lg-8.my-3
              p Para una distribución irregular del analito y un bajo número de muestras previas (<20), la expresión del número de muestras mínimo N para un intervalo de confianza dado y un error máximo E se transforma en la expresión: 
              h5.mb-4 Dónde:
              h5.mb-4 #[b.v.p-1.px-2 Sm#[sup 2]] - varianza de la muestra
              h5.mb-4 #[b.v.p-1.px-2 t] - parámetro t de Student para (n -1) grados de libertad o muestras y un nivel de confianza dado. Se obtiene de tablas.
              h5 #[b.v.p-1.px-2 E] - error máximo aceptado.                        
            .col-lg-4.my-3
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/36.svg', alt='')
              p.text-center (Universidad Politécnica de Cartagena, 2017)  

    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/37.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Para poder completar y profundizar en el estudio de los factores que influyen en la representatividad, se invita a hacer lectura consciente y atenta.
                  p.mb-0 Anexo1 _OtrosFactoresInfluyenEnRepresentatividad 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c3.fas.fa-file-download                               
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
