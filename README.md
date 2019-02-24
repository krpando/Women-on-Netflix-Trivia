# Trivia: Mujeres en Netflix

Iteración del proyecto de preadmisión de la 8ava generación de Laboratoria (Noviembre 2018 - Febrero 2019). 

## Objetivo del proyecto
Crear un juego tipo trivia de tema libre teniendo en cuenta los siguientes requerimientos:
- Que muestre un mínimo de 4 vistas
- Que en la primera vista pida al usuario/a ingresar su nombre ante de empezar
- Que en la segunda vista muestre un saludo con el nombre ingresado por el usuario/a
- Que una de las vista muestre dos alternativas o categorías para jugar
- Que cuente con un mínimo de 3 preguntas por categoría con 3 alternativas cada una
- Que muestre la puntuación lograda al finalizar cada juego y de la opción de volver a jugar

HACKER EDITION:
- Agregar timer o cuenta regresiva 
- No incluir `promt` o `alert`

## Requerimientos técnicos
- Usar Vanilla JS
- No hacer uso de frameworks

## Primera entrega
Fecha: 18/11/18  

El tema elegido para realizar este proyecto es NETFLIX, centrando las preguntas de la trivia en series y películas con participación femenina principal o resaltante.  

En esta primera entrega, se concluye que el proyecto cumple con el 60% de los requerimientos básicos solicitados, no logrando reunir los elementos necesarios para su viabilidad. 

Como puede observarse en los archivos de Primera Entrega, si bien los objetivos de maquetación se han realizado a un 100%, las dificultades a nivel de funcionalidad no permiten acceder a todas las vistas. Asimismo, se evidencian algunos errores en cuanto al diseño y adaptación que requieren ser atendidos en un siguiente entrega. Los tópicos cubiertos en esta primera iteración son:

- Usuario/a puede ingresar nombre en la primera vista 
- Usuario/a recibe saludo que incluye el nombre ingresado en la vista anterior
- Usuario/a puede elegir entre dos categorías: Series y Películas
- Usuario/a puede ingresar a la primera pregunta de cada categoría y ver las alternativas

**Documentación**

Vistas maquetadas a las que puede acceder el usuario o usuaria:

|Vista de inicio|Vista de saludo y categorías|
|:--:|:--:|
|<p align="center"><img src="https://i.ibb.co/qdX1Fm8/WON-Primera-Entrega-1.png" alt="VistaUno" width="400" height="180"></p>|<p align="center"><img src="https://i.ibb.co/KF4jgg9/WON-Primera-Entrega-2.png" alt="VistaDos" width="400" height="200"></p>|

|Vista de Series|Vista de Películas|
|:--:|:--:|
|<p align="center"><img src="https://i.ibb.co/MksPPWt/WON-Primera-Entrega-3.png" alt="VistaSeries" width="400" height="180"></p>|<p align="center"><img src="https://i.ibb.co/bLFLcWS/WON-Primera-Entrega-4.png" alt="VistaPeliculas" width="400" height="180"></p>|

Ver primera versión de [WON 1.0](https://codepen.io/krpando/pen/MxgaLM) en CodePen

**Oportunidades de mejora y recomendaciones de iteración**
- Modificar código que no permite la captura de evento del botón "Siguiente".
- Eliminar el código del contador de tiempo, en vista que no es funcional y obstaculiza el correcto funcionamiento de otras partes del código.
- Revisión de colores, fuente y tamaño de texto en la sección de preguntas, así como el espacio asignado a las secciones en general.
- Implementar los demás requerimientos para completar al 100% el objetivo del proyecto.
- Intentar la ejecución del 'Hacker Edition' y la aplicación de nuevas herramientas del HTML, JS y CSS.

## Segura entrega
Fecha: 21/11/18  
Fecha de última modificación: 15/12/18

En esta segunda entrega, se logra completar el 100% de los requerimientos básicos del proyecto, cumpliendo el objetivo establecido de crear un juego tipo trivia viable.

Como puede observarse en los archivos de Segunda Entrega, los requerimientos fueron cubiertos en su totalidad, a excepción del contador regresivo correspondiente a la 'Hacker Edition', la cual puede considerarse para una siguiente iteración. 

Se añadieron tres cambios en la fecha de última modificación correspondientes al `background` y `margin top` de la caja que muestra las secciones, permitiendo una mejor distribución de las vistas maquetadas. Así también se modificó el código de retorno a la sección de inicio, en vista que presentaba algunos fallos.
