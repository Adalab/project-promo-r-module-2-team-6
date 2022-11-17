'use strict';
let data = {
  palette: '',
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');
const card = document.querySelector('.js-preview-card');
const imgCard = document.querySelector('.js-card-img');

const fillForm = document.querySelector('.fill');

const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');

const linkedinIcon = document.querySelector('.js-linkedin-icon');
const githubIcon = document.querySelector('.js-github-icon');
const phoneIcon = document.querySelector('.js-phone-icon');
const emailIcon = document.querySelector('.js-email-icon');

//variables
//partes cuestionario
const design = document.querySelector('.js-design');
const fill = document.querySelector('.js-fill');
const btnCreate = document.querySelector('.js-btn-create');
//flechas
const arrowDesignUp = document.querySelector('.js-arrow-design-up');
const arrowFillUp = document.querySelector('.js-arrow-fill-up');
const arrowShareUp = document.querySelector('.js-arrow-share-up');
const arrowDesignDown = document.querySelector('.js-arrow-design-down');
const arrowFillDown = document.querySelector('.js-arrow-fill-down');
const arrowShareDown = document.querySelector('.js-arrow-share-down');
const form = document.querySelector('.js-form');

const inputs = document.querySelectorAll('.js-input');

const btnReset = document.querySelector('.js-reset');

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

const linkTwitter = document.querySelector('.js-twitter');

const submitBtn = document.querySelector('.js-btn-create');
const linkCard = document.querySelector('.js-link-card');

const shareSection = document.querySelector('.js-share-card');
