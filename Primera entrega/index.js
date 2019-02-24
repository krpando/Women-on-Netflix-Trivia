//Ocultar todas las secciones
document.getElementById('two').style.display = 'none';
document.getElementById('three').style.display = 'none';
document.getElementById('four').style.display = 'none';
document.getElementById('five').style.display = 'none';
//Petición de nombre, generación de bienvenida personalizada y pase a siguiente sección (sección 2)
const welcomeGamer = function welcome(){
  const gamer = document.getElementById('name').value;
  if(gamer==''){
    alert('Debes ingresar un nombre para jugar.');}
  else{
    const choices = document.getElementById('choices');  
    choices.textContent = `Bienvenidx, 
                          ${gamer}`;
   if (document.getElementById('two').style.display == 'none'){
     document.getElementById('two').style.display = 'block';
     document.getElementById('one').style.display = 'none';
   }
  }}
//Elección de categoría
function category1(){
      document.getElementById('two').style.display = 'none';
  if (document.getElementById('three').style.display == 'none'){    
     document.getElementById('three').style.display = 'block';
  }}

function category2(){
      document.getElementById('two').style.display = 'none';
  if (document.getElementById('four').style.display == 'none'){    
     document.getElementById('four').style.display = 'block';
  }}
//Presentación de preguntas y cronómetro

//Cáculo de resutados series

function next(){
const respuesta1=document.getElementById('respuesta1').value;
if (respuesta1=='b'){
let resultado1=1;
console.log(`${resultado1}`);
}else{
let resultado1=0;
}

// Determinamos el tiempo total en segundos //
let totalTiempo=15;
// Determinamos la url donde redireccionar //
    var url="http://www.lawebdelprogramador.com";
 
    function updateReloj()
    {
        document.getElementById('CuentaAtras').innerHTML = "Te quedan en "+totalTiempo+" segundos";
 
        if(totalTiempo==0)
        {
            window.location=url;
        }else{
            /* Restamos un segundo al tiempo restante */
            totalTiempo-=1;
            /* Ejecutamos nuevamente la función al pasar 1000 milisegundos (1 segundo) */
            setTimeout("updateReloj()",1000);
        }
    }
 
    window.onload=updateReloj;}