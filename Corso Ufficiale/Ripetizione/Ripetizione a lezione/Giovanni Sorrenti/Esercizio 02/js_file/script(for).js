//Dati ricevuti da Front-End
let date = {
    quizType: 1,
    answers: ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Coniglio'],
    mailReceived: true
};



//Dati recuperati dal database
let quiz1 = ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Pappagallo'];
let quiz2 = ['Napoleone', 'Cesare', 'Camillo Benso', 'Badoglio', 'Mussolini'];
let score = 0;

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;

if(date.quizType === 1){
    //Utente ha selezionato Quiz Animali.
    for (let i = 0; i < quiz1.length; i++) {
        //TODO: Verificare le risposte;
        if(date.answers[i] === quiz1[i]){
            score++
        };
    }
}else if(date.quizType === 2){
    //Utente ha selezionato Quiz Storico.
    for (let i = 0; i < quiz2.length; i++) {
        //TODO: Verificare le risposte;
        if(date.answers[i] === quiz2[i]){
            score++
        };
    }
}else{
    //Quiz non definito.
    console.log(`Quiz ${undefined}`)
}

//TODO: Verificare la risposta del pop-up;
setTimeout(() => {
    if (date.mailReceived === true) {
        console.log('Hai accettato le nostre newsletter!');
    }else{
        console.log('Newsletter rifiutate.');
    }
}, 2000);

//TODO: Mostra punteggio ottenuto.
console.log(`Il tuo punteggio è: ${score}`);