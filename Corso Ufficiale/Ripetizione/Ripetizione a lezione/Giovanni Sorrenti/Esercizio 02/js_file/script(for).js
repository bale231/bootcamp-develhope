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

`
<div class="general-container-quiz">
<div class="card">
  <!-- Title Card -->
  <header>
    <h3>Quiz App</h3>
  </header>
  <!-- Card content -->
  <div class="container-quiz">
    <form id="form-quiz">
      <div class="container-answer">
        <div class="title-quiz">
          <h4>Quale di questi animali è carnivoro?</h4>
        </div>
        <label for="tigre">
          <input type="radio" name="answer" id="tigre" value="tigre" />
          <span>Tigre</span>
        </label>
        <label for="tartaruga">
          <input
            type="radio"
            name="answer"
            id="tartaruga"
            value="tartaruga"
          />
          <span>Tartaruga</span>
        </label>
        <label for="panda">
          <input type="radio" name="answer" id="panda" value="panda" />
          <span>Panda</span>
        </label>
      </div>
      <div class="container-answer">
        <div class="title-quiz">
          <h4>Quale di questi animali è erbivoro?</h4>
        </div>
        <label for="zebra">
          <input type="radio" name="answer1" id="zebra" value="Zebra" />
          <span>Zebra</span>
        </label>
        <label for="giraffa">
          <input
            type="radio"
            name="answer1"
            id="giraffa"
            value="giraffa"
          />
          <span>Giraffa</span>
        </label>
        <label for="cane">
          <input type="radio" name="answer1" id="cane" value="cane" />
          <span>Cane</span>
        </label>
      </div>
      <div class="container-answer">
        <div class="title-quiz">
          <h4>Quale animale è conosciuto come il "re della savana"?</h4>
        </div>
        <label for="leone">
          <input type="radio" name="answer2" id="leone" value="leone" />
          <span>Leone</span>
        </label>
        <label for="elefante-africano">
          <input
            type="radio"
            name="answer2"
            id="elefante-africano"
            value="elefante-africano"
          />
          <span>Elefante africano</span>
        </label>
        <label for="cheetah">
          <input
            type="radio"
            name="answer2"
            id="cheetah"
            value="cheetah"
          />
          <span>Cheetah</span>
        </label>
      </div>
      <div class="container-answer">
        <div class="title-quiz">
          <h4>Quale animale ha le fusa come suono caratteristico?</h4>
        </div>
        <label for="scimpanzè">
          <input
            type="radio"
            name="answer3"
            id="scimpanzè"
            value="scimpanzè"
          />
          <span>Scimpanzè</span>
        </label>
        <label for="gatto">
          <input type="radio" name="answer3" id="gatto" value="gatto" />
          <span>Gatto</span>
        </label>
        <label for="orso">
          <input type="radio" name="answer3" id="orso" value="orso" />
          <span>Orso</span>
        </label>
      </div>
      <div class="container-answer">
        <div class="title-quiz">
          <h4>
            Quale animale ha le piume colorate e sa imitare i suoni?
          </h4>
        </div>
        <label for="ara">
          <input type="radio" name="answer4" id="ara" value="ara" />
          <span>Ara</span>
        </label>
        <label for="pappagallo">
          <input
            type="radio"
            name="answer4"
            id="pappagallo"
            value="pappagallo"
          />
          <span>Pappagallo</span>
        </label>
        <label for="colibrì">
          <input
            type="radio"
            name="answer4"
            id="colibrì"
            value="colibrì"
          />
          <span>Colibrì</span>
        </label>
      </div>
      <!-- Footer button quiz-->
      <div class="container-button">
        <button class="invia-risposte" type="submit" disabled>
          Invia
        </button>
      </div>
    </form>
  </div>
</div>
</div>

`