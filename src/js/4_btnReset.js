'use strict';
const inputs = document.querySelectorAll('.js-input');

console.log(inputs);
const btnReset = document.querySelector('.js-reset');

// const data = {
//     palette: '',
//     name:'',
//     job: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github:'',
//   };

function handleReset (event){
    event.preventDefault();
    for (const input of inputs){
        input.value = '';
        input.href = '';
        getData(input);
        updateCard();
    } 
    console.log(data);
}

btnReset.addEventListener('click', handleReset);