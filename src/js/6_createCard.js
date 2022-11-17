'use strict';
const linkTwitter = document.querySelector('.js-twitter');
function handleCreate(event) {
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST', //para envier datos, recoger seria GET
    body: JSON.stringify(data), //pasamos nuestros datos a cadena
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.cardURL);
      linkCard.innerHTML = responseJson.cardURL;
      linkCard.href = responseJson.cardURL;
      linkTwitter.href = `https://twitter.com/intent/tweet?url=${responseJson.cardURL}`;
    });
}

submitBtn.addEventListener('click', handleCreate);
