//Scrivi un programma che prenda un array di numeri e trovi il valore massimo.

const numbers = [1, 2, 3, 4, 5, 6];
let numMax = numbers[0];
numbers.forEach(number =>{
    if(number > numMax){
        numMax = number
    }
});

console.log(numMax)