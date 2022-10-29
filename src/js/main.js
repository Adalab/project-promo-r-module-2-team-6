'use strict';
// NOS SERVIRÁ MÁS ADELANTE PARA ENLAZAR EL BOTON DE TWITTER CON LA URL CREADA
// const link = document.querySelector('.twitter-share-button');
// link.href = 'https://twitter.com/intent/tweet?url=';

//ESCONDER Y MOSTRAR FORMULARIOS
//click flechita -> abrir/cerrar y flechita arriba/abajo (evento 'click')
//primera flechita por defecto abierta

//variables
const design = document.querySelector('.js-design');
const fill =  document.querySelector('.js-fill');
const btnCreate =  document.querySelector('.js-btn-create');
const arrowDesign = document.querySelector('.js-arrow-design');
const arrowFill = document.querySelector('.js-arrow-fill');
const arrowShare = document.querySelector('.js-arrow-share');

//funciones
function handleClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-arrow-design')) {
    design.classList.toggle('collapsed');
    fill.classList.add('collapsed');
    btnCreate.classList.add('collapsed');
  }else if (event.target.classList.contains('js-arrow-fill')) {
    fill.classList.toggle('collapsed');
    arrowFill.classList.toggle('arrow-fill-rotate');
    design.classList.add('collapsed');
    btnCreate.classList.add('collapsed');
  }else if (event.target.classList.contains('js-arrow-share')) {
    btnCreate.classList.toggle('collapsed');
    design.classList.add('collapsed');
    fill.classList.add('collapsed');
  }
}

//eventos
arrowDesign.addEventListener('click', handleClick);
arrowFill.addEventListener('click', handleClick);
arrowShare.addEventListener('click', handleClick);
