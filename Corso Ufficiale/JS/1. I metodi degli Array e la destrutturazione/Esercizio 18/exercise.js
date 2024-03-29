/* Dato un array originalArray, 
crea un nuovo array chiamato cloneArray che sia una copia superficiale 
di originalArray utilizzando l'operatore spread. */

const originalArray = [1, 2, 3, 4, 5];

const cloneArray = [...originalArray];

console.log(`Original Array: ${originalArray};`)
console.log(`Clone Array: ${cloneArray}.`)

const forEach = originalArray.forEach(log => log.length)

console.log(forEach);