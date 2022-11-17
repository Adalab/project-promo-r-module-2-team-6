'use strict';

const fillForm = document.querySelector('.fill');

const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');

const linkedinIcon = document.querySelector('.js-linkedin-icon');
const githubIcon = document.querySelector('.js-github-icon');
const phoneIcon = document.querySelector('.js-phone-icon');
const emailIcon = document.querySelector('.js-email-icon');

function getData(selectedInput) {
  if (selectedInput.name === 'name') {
    data.name = selectedInput.value;
  } else if (selectedInput.name === 'job') {
    data.job = selectedInput.value;
  } else if (selectedInput.name === 'email') {
    data.email = selectedInput.value;
  } else if (selectedInput.name === 'phone') {
    data.phone = selectedInput.value;
  } else if (selectedInput.name === 'github') {
    data.github = selectedInput.value;
  } else if (selectedInput.name === 'linkedin') {
    data.linkedin = selectedInput.value;
  }
}

function updateCard() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  phoneIcon.href = `tel:+34${data.phone}`;
  emailIcon.href = `mailto:${data.email}`;
  linkedinIcon.href = data.linkedin;
  githubIcon.href = data.github;
}

function handleInput(event) {
  event.preventDefault();
  const selectedInput = event.target;
  getData(selectedInput);
  saveInLocalStorage(data);
  updateCard();
}

fillForm.addEventListener('input', handleInput);
