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
    checkScore(quiz1)
}else if(date.quizType === 2){
    //Utente ha selezionato Quiz Storico.
    checkScore(quiz2)
}else{
    //Richiamo la funzione di gestione degli errori se tutte le condizioni non si verificano.
    checkError()
};

function checkScore (arr){
    date.answers.forEach(answer => {
        //TODO: Verificare le risposte;
        if(answer === arr[date.answers.indexOf(answer)]){
            score++
        }
    });

    //TODO: Mostra punteggio ottenuto;
    console.log(`Il tuo punteggio è ${score}`);
}

//Gestione e cattura degli errori.
function checkError (){
    try {
        if (date.quizType > 2 || typeof(date.quizType) === "string" || typeof(date.quizType) === "boolean"){
            throw new Error('Quiz inexistent')
        }
    } catch (error) {
        console.error(error)
    }
}

//TODO: Verificare la risposta del pop-up.
setTimeout(() => {
    if (date.mailReceived === true) {
        console.log('Hai accettato le nostre newsletter!');
    }else{
        console.log('Newsletter rifiutate.');
    }
}, 2000);