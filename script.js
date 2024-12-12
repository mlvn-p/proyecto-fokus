const html = document.querySelector('html');
const botonDescansoCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonDescansoLargo = document.querySelector('.app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const botonComenzarPausar = document.querySelector('#start-pause');
const audioPlay = new Audio('./sonidos/play.wav');
const audioPausa = new Audio('./sonidos/pause.mp3');
const audioTiempoFinalizado = new Audio('./sonidos/beep.mp3');
const textoComenzarPausar = document.querySelector('#start-pause span');
const iconoComenzarPausar = document.querySelector('#icono-comenzar-pausar');
const tiempoEnPantalla = document.querySelector('#timer');

let tiempoTranscurridoEnSegundos = 1500;
let idIntervalo = null;


inputEnfoqueMusica.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

musica.loop = true; 

botonDescansoCorto.addEventListener('click', () =>{
    tiempoTranscurridoEnSegundos = 300;
    cambiarContexto ('descanso-corto');
    botonDescansoCorto.classList.add('active');
})

botonEnfoque.addEventListener('click', () =>{
    tiempoTranscurridoEnSegundos = 1500;
    cambiarContexto ('enfoque'); 
    botonEnfoque.classList.add('active');
})

botonDescansoLargo.addEventListener('click', () =>{
    tiempoTranscurridoEnSegundos = 900;
    cambiarContexto ('descanso-largo');
    botonDescansoLargo.classList.add('active');
})

function cambiarContexto(contexto) {

    mostrarTiempo();
    botones.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagenes/${contexto}.png`);
    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
            `;
            break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Qué tal tomar un respiro? <strong class="app__title-strong">¡Haz una pausa corta!</strong>
            `;
            break;
        case "descanso-largo":
            titulo.innerHTML = `
            Hora de volver a la superficie.<strong class="app__title-strong"> Haz una pausa larga.</strong>
            `;
            break;
        default:
            break;
    }
}

const cuentaRegresiva = () => {
    if(tiempoTranscurridoEnSegundos <= 0){
        audioTiempoFinalizado .play()
        alert('Finalizó el tiempo');
        reiniciar();
        return;
    }
    textoComenzarPausar.textContent = "Pausar";
    iconoComenzarPausar.src= 'imagenes/pause.png';
    tiempoTranscurridoEnSegundos -= 1;
    mostrarTiempo();
}

botonComenzarPausar.addEventListener('click', comenzarPausar);

function comenzarPausar (){
    if(idIntervalo){
        audioPausa.play();
        reiniciar()
        return
    }
    audioPlay.play();
    idIntervalo = setInterval(cuentaRegresiva,1000)
}

function reiniciar(){
    clearInterval(idIntervalo);
    idIntervalo = null;
    textoComenzarPausar.textContent = "Comenzar";
    iconoComenzarPausar.src = 'imagenes/play_arrow.png';
}

function mostrarTiempo(){
    const tiempo = new Date(tiempoTranscurridoEnSegundos * 1000);
    const tiempoFormateado = tiempo.toLocaleTimeString('es-AR',{minute:'2-digit', second:'2-digit'});
    tiempoEnPantalla.innerHTML = `${tiempoFormateado}`;
}

mostrarTiempo();