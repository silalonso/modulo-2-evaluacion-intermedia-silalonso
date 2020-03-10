'use strict';

// genera un número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//ejecutamos la función
const random = getRandomNumber(100);
console.log(random);

//estamos definiendo num como el contenido del input con id=numero
const num = document.querySelector('#numero');

num.addEventListener('click', function() {
  if (num > random) {
    console.log('Demasiado alto');
  } else {
    if (num < random) {
      console.log('Demasiado bajo');
    } else {
      if (num === random) {
        console.log('Has ganado campeona!!!');
      } else {
        if (1 > num < 100) {
          console.log('El número debe estar entre 1 y 100');
        }
      }
    }
  }
});
