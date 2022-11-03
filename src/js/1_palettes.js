'use strict';
///////////variables////////
//paletas
const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');
//tarjeta
// const card = document.querySelector('js-preview-card');
// const header = document.querySelector('js-preview-header'); //rayita de la izquierda (borde)
/////texto header card
// const name = document.querySelector('js-preview-name');
// const job = document.querySelector('js-preview-job');
// const icon = document.querySelector('js-icon');

/////////Eventos///////////
palette1.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('hola'); //preguntar evento click en label o input
});

palette2.addEventListener('click', () => {
console.log(palette2);
});

palette3.addEventListener('click', () => {
console.log(palette3);
});