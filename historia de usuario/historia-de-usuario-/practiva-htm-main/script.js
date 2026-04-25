
alert("¡Bienvenido a mi portafolio!");

const btncambiar = document.getElementById('btncambiar');
const btnregresar = document.getElementById('btnregresar');
const proyectos = document.getElementById('proyectos');

const contenidoOriginal = proyectos.innerHTML;

btncambiar.addEventListener('click', function() {
  proyectos.textContent = 'estos son mis humildes proyectos :)';

  btnregresar.style.display = 'inline-block';

  btncambiar.style.display = 'none';



});
btnregresar.addEventListener('click', function(){
  proyectos.innerHTML = contenidoOriginal;
  btnregresar.style.display = 'none';
  btncambiar.style.display  = 'inline-block';
});

const btnocultar = document.querySelector('.btnocultar');
const btnregre = document.querySelector('.btnregre');
const sobremi = document.querySelector('.sobremi');

btnocultar.addEventListener('click', function(){
  sobremi.style.display = 'none';
  btnocultar.style.display = 'none';
  btnregre.style.display = 'inline-block';


});

btnregre.addEventListener('click', function(){
  sobremi.style.display = 'block';
  btnocultar.style.display = 'inline-block';
  btnregre.style.display = 'none';

});

window.addEventListener('load', function(){
  document.getElementById('inicio').textContent = 'bienvenidos';

});


