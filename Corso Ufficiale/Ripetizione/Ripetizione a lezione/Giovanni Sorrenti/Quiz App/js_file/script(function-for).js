//Dati ricevuti da Front-End:
let date = {
    quizType: 1,
    answers: ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Coniglio'],
    mailReceived: false
};


//Dati recuperati dal database:
let quiz1 = ['tigre', 'giraffa', 'leone', 'gatto', 'pappagallo'];
let quiz2 = ['Napoleone', 'Cesare', 'Camillo Benso', 'Badoglio', 'Mussolini'];
let score = 0;

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;
if(date.quizType === 1){
    //Utente ha selezionato Quiz Animali.
    checkScore(quiz1)
}else if(date.quizType === 2){
    //Utente ha selezionato Quiz Storico.
    checkScore(quiz2)
}else{
    //Quiz non definito.
    console.log(`Quiz ${undefined}`)
};

function checkScore (arr){
    for (let i = 0; i < arr.length; i++) {
        //TODO: Verificare le risposte;
        if(date.answers[i] === arr[i]){
            score++
        };
    }

    //TODO: Mostra punteggio ottenuto;
    console.log(`Il tuo punteggio è ${score}`);
}

//TODO: Verificare la risposta del pop-up.
setTimeout(() => {
    if (date.mailReceived === true) {
        console.log('Hai accettato le nostre newsletter!');
    }else{
        console.log('Newsletter rifiutate.');
    }
}, 2000);