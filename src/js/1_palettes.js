'use strict';
// const palette1
const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');
const card = document.querySelector('.js-preview-card');
const imgCard = document.querySelector('.js-card-img');

//////////Funciones///////////
const functionEventPalettes = (event) => {
  card.classList.remove('js-palette1');
  card.classList.remove('js-palette2');
  card.classList.remove('js-palette3');
  card.classList.add(event.currentTarget.value);
  if (event.currentTarget.value === 'js-palette1'){
    imgCard.src = './assets/images/adalaber.jpg';
  } else if (event.currentTarget.value === 'js-palette2') {
    imgCard.src = './assets/images/frontend.jpg';
  } else if (event.currentTarget.value === 'js-palette3') {
    imgCard.src = './assets/images/backend.jpg';
  }
};

/////////Eventos///////////
palette1.addEventListener('click', functionEventPalettes);

palette2.addEventListener('click', functionEventPalettes);

palette3.addEventListener('click', functionEventPalettes);