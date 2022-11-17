'use strict';
const inputs = document.querySelectorAll('.js-input');

const btnReset = document.querySelector('.js-reset');

function handleReset(event) {
  event.preventDefault();
  /* debugger;
for (let i = 0; i < 6; i++) {
    console.log(i);
    data[i++].value = '';
    data[i++].href = '';
    getData(input);
    updateCard();
  
}; */

  for (const input of inputs) {
    if (!input.classList.contains('fill__img--inputImg')) {
      input.value = '';
      input.href = '';
      getData(input);
      updateCard();
    }
  }
}

btnReset.addEventListener('click', handleReset);
