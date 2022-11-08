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



function handleInput (event) {
  event.preventDefault();
  const selectedInput = event.target.name;
  console.log(selectedInput);
  if (selectedInput === 'name'){
    data.name = event.target.value;
  }
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

