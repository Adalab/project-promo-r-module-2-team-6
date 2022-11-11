'use strict';

//ESCONDER Y MOSTRAR FORMULARIOS
//click flechita -> abrir/cerrar y flechita arriba/abajo (evento 'click')
//primera flechita por defecto abierta

//variables
//partes cuestionario
const design = document.querySelector('.js-design');
const fill =  document.querySelector('.js-fill');
const btnCreate =  document.querySelector('.js-btn-create');
//flechas
const arrowDesignUp = document.querySelector('.js-arrow-design-up');
const arrowFillUp = document.querySelector('.js-arrow-fill-up');
const arrowShareUp = document.querySelector('.js-arrow-share-up');
const arrowDesignDown = document.querySelector('.js-arrow-design-down');
const arrowFillDown = document.querySelector('.js-arrow-fill-down');
const arrowShareDown = document.querySelector('.js-arrow-share-down');
const form = document.querySelector ('.js-form');

//funciones
function handleClick(event) {
  /*  console.log(event.target);
  console.log(event.currentTarget); */

  if (event.target.classList.contains('js-arrow-design-up') || event.target.classList.contains('js-arrow-design-down')) {
    design.classList.remove('collapsed');
    fill.classList.add('collapsed');
    btnCreate.classList.add('collapsed');
    //flechas

    arrowDesignUp.classList.remove('collapsed');
    arrowDesignDown.classList.add('collapsed');

    arrowFillUp.classList.add('collapsed');
    arrowFillDown.classList.remove('collapsed');

    arrowShareUp.classList.add('collapsed');
    arrowShareDown.classList.remove('collapsed');
  }else if (event.target.classList.contains('js-arrow-fill-up') || event.target.classList.contains('js-arrow-fill-down')) {
    fill.classList.remove('collapsed');
    design.classList.add('collapsed');
    btnCreate.classList.add('collapsed');
    //flechas
    arrowFillUp.classList.remove('collapsed');
    arrowFillDown.classList.add('collapsed');

    arrowShareUp.classList.add('collapsed');
    arrowShareDown.classList.remove('collapsed');

    arrowDesignUp.classList.add('collapsed');
    arrowDesignDown.classList.remove('collapsed');
  }else if (event.target.classList.contains('js-arrow-share-up') || event.target.classList.contains('js-arrow-share-down')) {
    btnCreate.classList.remove('collapsed');
    design.classList.add('collapsed');
    fill.classList.add('collapsed');
    //
    arrowShareUp.classList.remove('collapsed');
    arrowShareDown.classList.add('collapsed');

    arrowDesignUp.classList.add('collapsed');
    arrowDesignDown.classList.remove('collapsed');

    arrowFillUp.classList.add('collapsed');
    arrowFillDown.classList.remove('collapsed');
  }
}

//eventos
/* arrowDesignUp.addEventListener('click', handleClick);
arrowFillUp.addEventListener('click', handleClick);
arrowShareUp.addEventListener('click', handleClick);

arrowDesignDown.addEventListener('click', handleClick);
arrowFillDown.addEventListener('click', handleClick);
arrowShareDown.addEventListener('click', handleClick); */
form.addEventListener('click', handleClick);