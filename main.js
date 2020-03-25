'use strict';

// genera un número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//ejecutamos la función
const random = getRandomNumber(100);
console.log(random);

//estamos definiendo num como el contenido del input con class=numero
const num = document.querySelector('.numero');
console.log(num);

// necesito ponerle el listener al botón, no al input

const btn = document.querySelector('.js-submitbutton');
console.log(btn);
// ahora el botón es btn, que es el sujeto del listener

function handleBtn(ev) {
  ev.preventDefault();
  if (num > random) {
    console.log('Demasiado alto');
  } else if (num < random) {
    console.log('Demasiado bajo');
  } else if (num === random) {
    console.log('Has ganado campeona!!!');
  } else if (1 > num < 100) {
    console.log('El número debe estar entre 1 y 100');
  }
}

btn.addEventListener('click', handleBtn);
