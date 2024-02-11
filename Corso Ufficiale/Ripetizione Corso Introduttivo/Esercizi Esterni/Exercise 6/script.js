//Scrivi un programma che prenda un anno e stampi sulla console se è bisestile o no.

const year = 2024;

if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("L'anno è bisestile");
}else{
    console.log("L'anno non è bisestile");
}