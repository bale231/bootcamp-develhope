/*
Crea una funzione chiamata "contoAllaRovescia" 
che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
Quando il conto alla rovescia raggiunge 0, 
visualizza un messaggio che indica che il conto alla rovescia è terminato.
*/

let tempoRimanente = 10;
console.log('Conto alla rovescia in corso...' );

function contoAllaRovescia() {
    console.log(tempoRimanente)
    tempoRimanente--;
    if (tempoRimanente <= 0) {
        clearInterval(counter);
        console.log('Conto alla rovescia terminato.')
    }
};

const counter = setInterval(contoAllaRovescia, 1000);