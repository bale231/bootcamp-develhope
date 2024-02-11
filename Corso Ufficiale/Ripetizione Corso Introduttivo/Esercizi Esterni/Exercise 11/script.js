/*Scrivi un codice che prenda una stringa 
come input e verifichi se è vuota o non vuota utilizzando l'operatore ternario.*/

const str = 'Hello';
//const verify = str === '' ? 'String is empty':'String is full';
//const verify = str.length > 0 ? 'String is empty':'String is full';

//console.log(verify)

console.log(str ? `This string is full and is: ${str}` : "This string is empty")