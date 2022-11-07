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

nameInput.addEventListener('input',()=> {
  
  let name= nameInput.value;
  console.log(name);

  if(name===''){
    previewName.innerHTML='Nombre Apellido';
  }else{
    
    previewName.innerHTML=name;
    console.log(name);
  }
});