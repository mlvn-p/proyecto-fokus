const html = document.querySelector('html');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

botonDescansoCorto.addEventListener('click', () =>{
    cambiarContexto ('descanso-corto');
})

botonEnfoque.addEventListener('click', () =>{
    cambiarContexto ('enfoque'); 
})

botonDescansoLargo.addEventListener('click', () =>{
    cambiarContexto ('descanso-largo')
})


function cambiarContexto (contexto){
    html.setAttribute('data-contexto', "contexto");
    banner.setAttribute('src', `./imagenes/${contexto}.png`);
}