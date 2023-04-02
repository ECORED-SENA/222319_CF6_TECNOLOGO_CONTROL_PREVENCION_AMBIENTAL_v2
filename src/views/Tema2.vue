<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1  Métodos y equipos para la toma de muestras

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-7
        p(data-aos="fade-down") En la mayoría de los casos, #[b.g los protocolos de toma de muestra se encuentran en las normas ASTM, ISO, EPA, UNE o UNE-EN, que son de carácter internacional, y en las que se encontrará protocolizado todo el proceso, desde la etapa de toma de muestra, pasando por reducción, envasado, conservación y método o métodos de aplicación para efectuar la determinación de que se trate, con el fin de asegurar la calidad del proceso.] Algunos procedimientos de toma de muestra se dividen en función del estado físico de la matriz; asimismo, de acuerdo con los dos grandes grupos: sólidos y líquidos, se pueden encontrar tablas que resumen los diferentes tipos de recipientes, métodos y tiempos máximos de conservación de las muestras en función del analito a determinar.
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')
    
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Muestreo y análisis en aguas  

    p(data-aos="fade-down") A continuación, se presentan las normas y guías técnicas para el alistamiento y valoración de distintas muestras según el protocolo de recolección.

    p(data-aos="fade-down").mb-5 #[b.g Resolución 631 del 2015. Parámetros vertimientos.] Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. 

    .row.mb-5.text-center
      .col-md-6.col-lg.mb-3.mb-lg-0
        .bg6.p-4.h-100
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
          h5.mb-3 NTC-ISO 5667-1 Calidad del agua. Muestreo
          p.mb-0 Directrices para el diseño de planes de muestreo.  
      .col-md-6.col-lg.mb-3.mb-lg-0
        .bg6.p-4.h-100
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
          h5.mb-3 NTC-ISO 5667-2 Calidad del agua. Muestreo
          p.mb-0 Técnicas generales de muestreo  
      .col-md-6.col-lg.mb-3.mb-lg-0
        .bg6.p-4.h-100
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
          h5.mb-3 NTC-ISO 5667-3 - Calidad del agua. Muestreo
          p.mb-0 Directrices para la preservación y manejo de muestras.  
      .col-md-6.col-lg.mb-3.mb-lg-0
        .bg6.p-4.h-100
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
          h5.mb-3 NTC-ISO 5667-10 - Calidad del agua. Muestreo
          p.mb-0 Muestreo de aguas residuales.                                

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Muestreo y análisis en suelos

    p(data-aos="fade-down").mb-5 Con respecto al muestreo y análisis en suelos, estas son las normas y guías técnicas que regulan los mismos.

    .row.justify-content-center.mb-5
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')

      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 4113-1- Calidad del suelo. Muestreo. 
            p.mb-0 Directrices para el diseño de planes de muestreo.  
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 4113-2- Calidad del suelo. Muestreo. 
            p.mb-0 Técnicas generales de muestreo.  
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 4113-3- Calidad del suelo. Muestreo. 
            p.mb-0 Guía sobre seguridad.  
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 4113-4- Calidad del suelo. Muestreo. 
            p.mb-0 Sitios cultivados.   
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 4113-6- Calidad del suelo. Muestreo. 
            p.mb-0 anejo y almacenamiento del suelo para evaluación de procesos microbianos aeróbicos en el laboratorio.  
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC 3935-Gestión ambiental. Calidad de suelo. 
            p.mb-0 Pretratamiento de muestras para la determinación de contaminantes orgánicos.   
          .tarjeta.bg6.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')
            h5.mb-3 NTC-ISO 11464 Gestión ambiental. Calidad del suelo. 
            p.mb-0 Pretratamiento de las muestras de suelo para análisis fisicoquímicos.

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Muestreo y análisis de olores (aire)

    p(data-aos="fade-down").mb-5 Estas son las resoluciones o referentes normativos vigentes para regular el muestreo y análisis de olores. Se recomienda tomar nota de ellas.

    .row.justify-content-between.mx-0.bg7.mb-5
      .col-auto.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/21.svg', alt='')
      .col
        .bgw.p-4.my-4.me-2
          p(data-aos="fade-down") #[b Resolución 1541 de 2013:] Por la cual se establecen los niveles permisibles de calidad del aire o de inmisión, el procedimiento para la evaluación de actividades que generan olores ofensivos y se dictan otras disposiciones. 

          p(data-aos="fade-down") #[b Resolución 2087 de 2014:] Por la cual se adopta el protocolo para el monitoreo, control y vigilancia de olores ofensivos. 

          p(data-aos="fade-down") #[b Resolución 1541 de 2013:] Para la medición de sustancias de olor.  

    .row.justify-content-center.align-items-end.bg8.mb-5           
      .col-lg-8.my-3.p-3 
        ul.lista-ul(data-aos="fade-down")
          li 
            i.fas.fa-check.c2
            | #[b NTC 6012-1 ]Efectos y evaluación de los olores. Evaluación psicométrica de las molestias por olores.
          li 
            i.fas.fa-check.c2
            | #[b NTC 4503 ]Análisis sensorial metodología. Iniciación y entrenamiento de evaluadores en la detección y reconocimiento de olores. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 4770 ]Calidad del agua; determinación del olor; método de umbral de olor NTC 838 pinturas; disolventes y diluyentes; identificación y determinación del olor. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 958 ]Agua potable; determinación del olor y del sabor. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 5602 ]Determinación del olor de los adhesivos.
          li 
            i.fas.fa-check.c2
            | #[b NTC 5880 ]Calidad del aire; determinación de la concentración de olor por olfatometría dinámica. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 6012-1 ]Efectos y evaluación de los olores. Evaluación psicométrica de las molestias por olores. Cuestionarios. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 6012-2 ]Efectos y evaluación de olores; determinación de parámetros de molestia mediante preguntas breves repetidas, a panelistas de un vecindario. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 6049-1 ]Medición de impacto de olor mediante inspección en campo; medición de la frecuencia del impacto de olores reconocibles; medición de malla.
          li 
            i.fas.fa-check.c2
            | #[b NTC 6049-2 ]Medición de impacto de olor mediante inspección en campo; medición de la frecuencia del impacto de olores reconocibles. Medición de pluma. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 6049-3 ]Medición de impacto de olor mediante inspección en campo; determinación de intensidad de olor y tono hedónico de olor. 
          li 
            i.fas.fa-check.c2
            | #[b NTC 6049-4 ]Determinación del tono hedónico del olor; perfiles de polaridad.                  
      .col-lg-4.my-3          
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')


    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
    h2 2.4 Muestreo y análisis de residuos sólidos

    p(data-aos="fade-down").mb-5 En relación con el muestreo de análisis de residuos sólidos, en las siguientes tablas se presentan algunos decretos y otras normativas que se deben tener en cuenta. Se recomienda conocerlas y tomar atenta nota de ellas.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Tabla No.1" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center
          .col-10            
            .tabla-a.color-acento-botones.mb-5 
              table
                tbody
                  tr
                    td.brg.ctab Decreto 2202 de 1968:
                    td.brg Expedido por la Presidencia de la República. Por el cual se reglamenta la industria y comercio de los abonos o fertilizantes químicos simples, químicos compuestos, orgánicos naturales, orgánicos reforzados, enmiendas y acondicionadores del suelo, y se derogan unas disposiciones.
                  tr                    
                    td.brg.ctab NTC 2581. 89-06-21
                    td.brg Abonos o fertilizantes. Determinación de carbonatos totales y proporciones aproximadas de carbonatos de calcio y magnesio en calizas y calizas dolomíticas. Establece ensayos.
                  tr                    
                    td.brg.ctab NTC 3795. 95-08-23
                    td.brg Fertilizantes sólidos. Derivación de un plan de muestreo para la evaluación de una entrega grande.
                  tr
                    td.brg.ctab NTC-ISO 8633. 95-08-23
                    td.brg Fertilizantes sólidos. Método de muestreo simple para lotes pequeños. Define un plan de muestreo para el control de las cantidades de fertilizante sólido de máximo 250 T y presenta el método a emplear. Se aplica a todos los fertilizantes sólidos a granel o empacados.
                  tr                    
                    td.brg.ctab NTC-ISO 8634. 95-08-23
                    td.brg Fertilizantes sólidos. Plan de muestreo para la evaluación de una entrega grande.
                  tr                    
                    td.brg.ctab NTC 234. 96-11-27  
                    td.brg Abonos o fertilizantes. Método de ensayo para la determinación cuantitativa del fósforo. Contiene definiciones, requisitos, métodos de ensayo e informe.                   

      .py-4.py-md-5(titulo="Tabla No.2" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center
          .col-10            
            .tabla-a.color-acento-botones.mb-5 
              table
                tbody
                  tr
                    td.brg.ctab NTC 4150. 97-06-25
                    td.brg Abonos o fertilizantes. Método cuantitativo para la determinación del nitrógeno amoniacal por titulación previo tratamiento con formaldehído. Establece un método cuantitativo para determinar el contenido de nitrógeno amoniacal en abonos o fertilizantes.
                  tr                    
                    td.brg.ctab NTC 4173. 97-06-25
                    td.brg Fertilizantes sólidos y acondicionadores del suelo. Ensayo de tamizado. Especifica un método para la determinación, mediante ensayos de tamizado, la distribución del tamaño de partículas de los fertilizantes sólidos y los acondicionadores de suelos.
                  tr                    
                    td.brg.ctab NTC 4175. 97-06-25
                    td.brg Fertilizantes sólidos. Preparación de muestras para análisis químicos y físicos. Especifica los métodos para la preparación de las muestras o porciones de muestras requeridas para los ensayos químicos o físicos de fertilizantes sólidos. Contiene definiciones, aparatos, rotulado y reporte de preparación de muestra. 
                  tr
                    td.brg.ctab NTC 4175. 97-06-25
                    td.brg Fertilizantes sólidos. Preparación de muestras para análisis químicos y físicos. Especifica los métodos para la preparación de las muestras o porciones de muestras requeridas para los ensayos químicos o físicos de fertilizantes sólidos. Contiene definiciones, aparatos, rotulado y reporte de preparación de muestra. 
                  tr                    
                    td.brg.ctab NTC 370. 97-08-27
                    td.brg Abonos o fertilizantes. Determinación del nitrógeno total. Establece el método para determinar el contenido de nitrógeno total en abonos o fertilizantes. Contiene definiciones y ensayos. 
                  tr                    
                    td.brg.ctab NTC 35. 98-03-18   
                    td.brg Abonos y fertilizantes. Determinación de la humedad. Del agua libre y del agua total. Establece los métodos para determinar el contenido de humedad, agua libre y agua total en abonos o fertilizantes. Contiene definiciones y ensayos.
                  tr                    
                    td.brg.ctab NTC 202. 01-08-01
                    td.brg Métodos cuantitativos para la determinación de potasio soluble en agua, en abonos o fertilizantes y fuentes de materias para su fabricación. Establece los métodos cuantitativos para la determinación del contenido de potasio soluble en agua, en abonos o fertilizantes y fuentes. De materias primas para su fabricación.     

      .py-4.py-md-5(titulo="Tabla No.3" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center
          .col-10            
            .tabla-a.color-acento-botones.mb-5 
              table
                tbody
                  tr
                    td.brg.ctab NTC 1927. 01-10-31
                    td.brg Fertilizantes y acondicionadores de suelos. Definiciones. Clasificación y fuentes de materias primas. Define los términos relacionados con fertilizantes, acondicionadores del suelo, fuentes de materias primas, y sus clasificaciones. 
                  tr                    
                    td.brg.ctab Resolución 074 de 2002
                    td.brg Elaborada por el Ministerio de Agricultura y Desarrollo Rural. Por la cual se establece el reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos agropecuarios ecológicos. El prefijo BIO únicamente puede ser utilizado en acondicionadores orgánicos registrados para agricultura ecológica, que involucren microorganismos en su composición.
                  tr                    
                    td.brg.ctab Resolución ICA No. 00150 del 21 de enero de 2003
                    td.brg Expedida por el Instituto Colombiano Agropecuario. Por el cual se adopta el reglamento técnico de fertilización y acondicionadores de suelos para Colombia. 
                  tr
                    td.brg.ctab NTC 40. 03-03-19
                    td.brg Fertilizantes y acondicionadores de suelos. Etiquetado. Establece los requisitos que debe cumplir el etiquetado de los envases y embalajes destinados para fertilizantes y acondicionadores de suelos. 
                  tr                    
                    td.brg.ctab NTC 5167. 2004-05-31
                    td.brg Productos para la industria agrícola. Materiales orgánicos usados como fertilizantes y acondicionadores del suelo. Establece requisitos que deben cumplir y los ensayos a los cuales deben ser sometidos los productos orgánicos usados como fertilizantes o como acondicionadores del suelo. Reglamenta los limitantes actuales para el uso de materiales orgánicos, los parámetros físicoquímicos de los análisis de las muestras de materia orgánica, los límites máximos de metales y enuncia algunos parámetros para los análisis microbiológicos.


    .row.justify-content-center.align-items-center      
      .col-lg-10
        .row.bg3
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/11.svg', alt='')
          .col-10
            .p-4
              h5(data-aos="fade-down").mb-4 Importante: una muestra representativa antes de ingresar al laboratorio.
              p(data-aos="fade-down") ¡Un buen análisis o ensayo para caracterizar y valorar una muestra depende de que la cantidad sea representable del sitio y el lugar de donde se tomó o recolectó!

              p(data-aos="fade-down").mb-4 Un plan de toma de muestra debe asegurar que la obtenida refleje adecuadamente las propiedades que interesan del lote del que proviene, es decir, la muestra final debe ser:
              .row.justify-content-start.align-items-center.mb-4           
                .col-auto
                  .bgw.brad.p-4
                    ul.lista-ul.mb-0(data-aos="fade-down")
                      li 
                        i.fas.fa-check.c1
                        | #[b Tan similar como sea posible a la población global a analizar]
                      li 
                        i.fas.fa-check.c1
                        | #[b Poseer sus características esenciales]
                      li.mb-0 
                        i.fas.fa-check.c1
                        | #[b Ser reproducible] 
              p(data-aos="fade-down") Para conseguir este resultado es necesario seleccionar subáreas y métodos de toma de muestra con base en criterios estadísticos y/o la experiencia previa.

              p(data-aos="fade-down") Al aumentar el número y volumen de las muestras, aumenta la representatividad, pero las consideraciones económicas y de conveniencia introducirán límites en ambos, ya que no se pueden manejar y transportar toneladas de muestra, y que al final, la técnica analítica a emplear limitará aún más la cantidad de la muestra para análisis.
                                
</template>

<script>
export default {
  name: 'Tema2',
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
