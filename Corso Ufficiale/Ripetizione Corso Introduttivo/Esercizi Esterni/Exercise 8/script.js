//Scrivi un programma che prenda un numero da 1 a 7 e 
//stampi sulla console il giorno della settimana corrispondente. 
//Considera il caso in cui il numero possa essere errato.

const number = 7;

if(number === 1){
    console.log('Lunedì')
}else if(number === 2){
    console.log('Martedì')
}else if(number === 3){
    console.log('Mercoledì');
}else if(number === 4){
    console.log('Giovedì')
}else if(number === 5){
    console.log('Venerdì')
}else if(number === 6){
    console.log('Sabato')
}else if(number === 7){
    console.log('Domenica')
}else{
    console.log('Giorno non definito...')
}
