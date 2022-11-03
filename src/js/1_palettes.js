'use strict';
// const palette1
const palette2 = document.querySelector('.js-palette2');
// const palette3
const card = document.querySelector('.js-preview-card');

palette2.addEventListener('click', ()=>{
  console.log('hola');
  card.classList.add('palette2');
});