'use strict';

/* {
    "palette": 1,
    "name": "María García",
    "job": "Front-end developer",
    "phone": "+34 666666666",
    "email": "mariagar@example.com",
    "linkedin": "mariagar",
    "github": "mariagar",
    "photo": "data:image/png;base64,2342ba..."
  } */

const data = {
  palette: '',
  name:'',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github:'',
};

// const nameInput = document.querySelector ('.js-name');
// const jobInput = document.querySelector ('.js-job');
// const emailInput = document.querySelector ('.js-email');
// const phoneInput = document.querySelector ('.js-phone');
// const linkedinInput = document.querySelector ('.js-linkedin');
// const githubInput = document.querySelector ('.js-github');

const fillForm= document.querySelector('.fill');

const previewName = document.querySelector ('.js-preview-name');
const previewJob = document.querySelector ('.js-preview-job');

const linkedinIcon = document.querySelector ('.js-linkedin-icon');
const githubIcon = document.querySelector ('.js-github-icon');
const phoneIcon = document.querySelector ('.js-phone-icon');

function getData(selectedInput){
  if (selectedInput.name === 'name'){
    data.name = selectedInput.value;
  }else if(selectedInput.name === 'job'){
    data.job = selectedInput.value;
  }else if(selectedInput.name === 'email'){
    data.email = selectedInput.value;
  }else if(selectedInput.name === 'phone'){
    data.phone = selectedInput.value;
  }else if(selectedInput.name === 'github'){
    data.github = selectedInput.value;
  }else if(selectedInput.name === 'linkedin'){
    data.linkedin = selectedInput.value;
  }
}

function updateCard() {
  if(data.name===''){
    previewName.innerHTML='Nombre Apellido';
  }else{
    previewName.innerHTML=data.name;
    console.log(data.name);
  }
  if(data.job===''){
    previewJob.innerHTML='Front-end developer';
  }else{
    previewJob.innerHTML=data.job;
    console.log(data.job);
  }
  linkedinIcon.href = data.linkedin;
  githubIcon.href = data.github;
}


function handleInput (event) {
  event.preventDefault();
  const selectedInput = event.target;
  getData(selectedInput);
  console.log(data);
  updateCard();

}

fillForm.addEventListener('input', handleInput);







// nameInput.addEventListener('input',()=> {
  
//   data.name= nameInput.value;
//   console.log(names);

//   if(names===''){
//     previewName.innerHTML='Nombre Apellido';
//   }else{
    
//     previewName.innerHTML=names;
//     console.log(names);
//   }
// });

// let names = '';
// jobInput.addEventListener('input',()=> {
  
//   names= jobInput.value;
//   console.log(names);

//   if(names===''){
//     previewName.innerHTML='Nombre Apellido';
//   }else{
    
//     previewName.innerHTML=names;
//     console.log(names);
//   }
// });

