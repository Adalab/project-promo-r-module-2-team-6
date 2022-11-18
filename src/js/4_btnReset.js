'use strict';

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
      profileImage.style = 'background-image: url(./assets/images/giphy.gif)';
      profilePreview.style.backgroundImage = '';
      getData(input);
      localStorage.removeItem('data');
      updateCard();
    }
  }
}

btnReset.addEventListener('click', handleReset);
