'use strict';
// NOS SERVIRÁ MÁS ADELANTE PARA ENLAZAR EL BOTON DE TWITTER CON LA URL CREADA
// const link = document.querySelector('.twitter-share-button');
// link.href = 'https://twitter.com/intent/tweet?url=';

//ESCONDER Y MOSTRAR FORMULARIOS
//click flechita -> abrir/cerrar y flechita arriba/abajo (evento 'click')
//primera flechita por defecto abierta

//variables
//partes cuestionario

//form-fill
const fill =  document.querySelector('.js-fill');
const arrowFill = document.querySelector('.js-arrow-fill');

//form-design
const design =  document.querySelector('.js-design');
const arrowDesign= document.querySelector('.js-arrow-design');

//form-share
const share =  document.querySelector('.js-btn-create');
const arrowShare = document.querySelector('.js-arrow-share');

//arrow
const form = document.querySelectorAll('.js-form');

//funciones
function handleClick(event) {
  event.preventDefault();
  console.log(event.)
  if (event.target.classList.contains('js-arrow-fill')){
    fill.classList.toggle('collapsed');
    design.classList.add('collapsed');
    share.classList.add('collapsed');

  }else if (event.target.classList.contains('js-arrow-design')){
    design.classList.toggle('collapsed');
    fill.classList.add('collapsed');
    share.classList.add('collapsed');

  }else if (event.target.classList.contains('js-arrow-share')){
    share.classList.toggle('collapsed');
    design.classList.add('collapsed');
    fill.classList.add('collapsed');

}

//eventos
// arrowFill.addEventListener('click', handleClick);
// arrowDesign.addEventListener('click', handleClick);
// arrowShare.addEventListener('click', handleClick);

form.addEventListener('click', handleClick);