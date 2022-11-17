'use strict';

const functionEventPalettes = (event) => {
  card.classList.remove('js-palette1');
  card.classList.remove('js-palette2');
  card.classList.remove('js-palette3');
  card.classList.add(event.currentTarget.value);
  if (event.currentTarget.value === 'js-palette1') {
    data.palette = 1;
  } else if (event.currentTarget.value === 'js-palette2') {
    data.palette = 2;
  } else if (event.currentTarget.value === 'js-palette3') {
    data.palette = 3;
  }
};

palette1.addEventListener('click', functionEventPalettes);

palette2.addEventListener('click', functionEventPalettes);

palette3.addEventListener('click', functionEventPalettes);
