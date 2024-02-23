/*Scrivi un programma che prenda un array con elementi 
duplicati e restituisca un nuovo array con i duplicati rimossi.*/

const arrDuplicates = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5];
const duplicates = [];

arrDuplicates.forEach(element =>{
    if(!duplicates.includes(element)){
        duplicates.push(element)
    }
});

console.log(duplicates)