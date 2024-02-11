//Scrivi un programma che prenda un array di numeri e trovi il valore minimo.

const numbers = [1, 2, 3, 4, 5, 6, 7];
const lower = numbers[0];

numbers.forEach(number =>{
    if(number < lower){
        lower = number
    }
});

console.log(lower)