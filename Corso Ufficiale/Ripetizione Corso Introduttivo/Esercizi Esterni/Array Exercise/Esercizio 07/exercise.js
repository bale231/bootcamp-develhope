/*Scrivi un programma che prenda un array di stringhe e un elemento di ricerca e 
restituisca l'indice della prima occorrenza dell'elemento nell'array.*/

const str = ['Luigi', 'Alberto', 'Andrea', 'Alessio', 'Antonio'];
const searchElement = 'Luigi';
let index = str.indexOf(searchElement);

console.log('Index of', searchElement, 'on array:', index)