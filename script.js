const html = document.querySelector('html');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');

botonDescansoCorto.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-corto');
})

botonEnfoque.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'enfoque');
})

botonDescansoLargo.addEventListener('click', () =>{
    html.setAttribute('data-contexto', "descanso-largo");
})