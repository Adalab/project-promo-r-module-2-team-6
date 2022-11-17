'use strict';

function saveInLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
const dataSaved = JSON.parse(localStorage.getItem('data'));

if (dataSaved !== null) {
  data = dataSaved;
  updateCard();
  // let i = 0;
  // for (const item in data) {
  //   inputs[i].value = item;
  // }
  inputs[0].value = data.name;
  inputs[1].value = data.job;
  profileImage.style.backgroundImage = `url(${data.photo})`;
  profilePreview.style.backgroundImage = `url(${data.photo})`;
  // inputs[2].value = data.photo;
  inputs[3].value = data.email;
  inputs[4].value = data.tel;
  inputs[5].value = data.linkedin;
  inputs[6].value = data.github;
  shareSection.classList.add('hidden');
}
