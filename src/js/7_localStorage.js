'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
data = JSON.parse(localStorage.getItem('data'));
updateCard();
inputs[0].value = data.name;
inputs[1].value = data.job;
inputs[2].value = data.photo;
inputs[3].value = data.email;
inputs[4].value = data.tel;
inputs[5].value = data.linkedin;
inputs[6].value = data.github;
