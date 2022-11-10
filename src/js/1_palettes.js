'use strict';
///////////variables////////
//paletas
const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');
const card = document.querySelector('.js-preview-card');

//////////Funciones///////////
const functionEventPalettes = (event) => {
  /* event.currentTarget.setAttribute('checked',''); */
  card.classList.remove('js-palette1');
  card.classList.remove('js-palette2');
  card.classList.remove('js-palette3');
  card.classList.add(event.currentTarget.value);
  console.log(event.currentTarget.value);
  
};

/////////Eventos///////////
palette1.addEventListener('click', functionEventPalettes);

palette2.addEventListener('click', functionEventPalettes);

palette3.addEventListener('click', functionEventPalettes);