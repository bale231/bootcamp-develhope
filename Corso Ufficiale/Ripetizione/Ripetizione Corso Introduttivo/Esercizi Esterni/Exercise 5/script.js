/*Scrivi un programma che prenda l'età e una variabile booleana che indica se la persona ha una patente, 
quindi stampi sulla console se la persona è maggiorenne e ha una patente*/

const age = 18;
const haveLicense = true;

if (age >= 18 && haveLicense){
    console.log('La persona in questione ha la patente');
}else if(age >= 18 && !haveLicense){
    console.log('La persona in questione è maggiorenne ma non ha la patente');
}else{
    console.log('La persona in questione è minorenne');
}