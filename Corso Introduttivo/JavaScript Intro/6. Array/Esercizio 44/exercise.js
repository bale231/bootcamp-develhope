let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]);
console.log(numbers[9]);
console.log(numbers.length);
console.log(numbers[20]) /* --> Esce "undefined" perchè il ventesimo numero non esiste nell'array, gli array in realtà qui sono 9, secondo javascript, perchè esso inizia a contare da 0 in poi.*/