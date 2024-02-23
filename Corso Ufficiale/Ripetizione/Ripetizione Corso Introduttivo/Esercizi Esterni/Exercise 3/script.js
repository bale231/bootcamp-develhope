//Scrivi un programma che prenda l'età di una persona e stampi sulla console se può guidare.

const persona = 10;

if (persona < 18){
    console.log('Non può guidare, è minorenne !!');
}else if(persona > 18){
    console.log('Può guidare.');
}else{
    console.log('ERROR');
}