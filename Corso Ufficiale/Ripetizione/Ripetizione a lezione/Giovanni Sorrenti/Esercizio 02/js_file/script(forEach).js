//Dati ricevuti da Front-End
let date = {
    quizType: 1,
    answers: ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Coniglio'],
    mailReceived: true
};

let punteggio = 0;

//Dati recuperati dal database
let quiz1 = ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Pappagallo'];
let quiz2 = ['Napoleone', 'Cesare', 'Camillo Benso', 'Badoglio', 'Mussolini'];

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;

if(DataView.quizType === 1){
    //Utente ha selezionato quiz animali.
    date.answers.forEach(answer => {
        //TODO: Verificare le risposte;
        if(answer === quiz1[date.answers.indexOf(answer)]){
            punteggio++
        }
    });

}else if(DataView.quizType === 2){
    //Utente ha selezionato quiz storico.
    date.answers.forEach(answer => {
        //TODO: Verificare le risposte;
        if(answer === quiz2[date.answers.indexOf(answer)]){
            punteggio++
        }
    });
}else{
    //Quiz non definito.
    console.log(`Quiz ${undefined}`);
}


//TODO: Mostra punteggio ottenuto;
console.log(`Il tuo punteggio è: ${punteggio}`);

//TODO: Verificare la risposta del pop-up.
setTimeout(() => {
    if (date.mailReceived === true) {
        console.log('Hai accettato le nostre newsletter!');
    }else{
        console.log('Newsletter rifiutate.');
    }
}, 2000);