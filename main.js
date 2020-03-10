'use strict';

// genera un número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const random = getRandomNumber(100);
console.log(random);

// const num = document.querySelector('.value');
// num.addEventListener('click',function(){})

// if (num > random) {
//   console.log('Demasiado alto');
// } else {
//   if (num < random) {
// console.log('Demasiado bajo');
//   } else {
// if (num === random) {
//   console.log('Has ganado campeona!!!');
// }
//   }
// }
