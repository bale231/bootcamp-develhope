let footerPage = document.querySelector('.footer-page');
//Var on date copiryght
let date = new Date();
let year = date.getFullYear();
//Add footer template on HTML:
footerPage.innerHTML = `<span>Copyright © ${year} : <a href='https://www.develhope.co/it/sign-up/'><strong>develhope.co</strong></a></span>`;

let btnType = document.querySelector('.tipologia');
let inputQuiz = document.getElementById('selected-quiz');
let cardSelection = document.querySelector('.general-container-quiz-select');
let card = document.querySelector('.card');
let containerQuiz1 = document.querySelector('.general-container-quiz')
let containerAll = document.querySelector('.container');
let quizAnimals = document.querySelector('.quiz1');
let quizHistory = document.querySelector('.quiz2');
//Prendo il form e i vari input:
let item = document.querySelector('.invia-risposte');
let input = document.querySelectorAll('input');

//Dati recuperati dal database:
let quiz1 = ['Tigre', 'Giraffa', 'Leone', 'Gatto', 'Pappagallo'];
let quiz2 = ['Napoleone', 'Cesare', 'Camillo Benso', 'Badoglio', 'Mussolini'];

//Dati ricevuti da Front-End
class quizApp {
  constructor() {
    this.data = [];
  }

  selezionaQuiz(quizSelezionato) {
    this.data.push({
      quizType: quizSelezionato,
      mailReceived: false
    })
  }

  ricezioneRisposte(risposte) {
    this.data.push({
      answers: [risposte]
    })
  }

  newsLetterSelect(index) {
    return this.data[index].mailReceived = true
  }

  checkScore(arr) {
    let score = 0;
    this.data[1].answers.forEach(answer => {
      //TODO: Verificare le risposte;
      if (answer === arr[this.data[1].answers.indexOf(answer)]) {
        score++
      }
    });

    alert(`Il tuo punteggio è ${score}`)

    score = 0;
  }

  checkError() {
    try {
      if (this.data.quizType > 2 || typeof (this.data.quizType) === "string" || typeof (this.data.quizType) === "boolean") {
        throw new Error('Quiz inexistent');
      }
    } catch (error) {
      console.error(error);
    }
  }

}

let appQuiz = new quizApp();

//Evento che al click mi rende il bottone cliccabile nella sezione di scelta:
function btnActivatedSelect() {
  input.forEach(quizSelected => {
    quizSelected.addEventListener("click", function () {
      item.classList.add('btn-activated-select');
      item.removeAttribute('disabled');
    });
  })
}

//Evento che controlla quale quiz ha scelto l'utente:
inputQuiz.addEventListener('submit', (e) => {
  //blocca il reload della pagina:
  e.preventDefault();
  //Controllo singolarmente l'input che ha scelto l'utente
  input.forEach(quiz => {
    if (quiz.checked)
      appQuiz.selezionaQuiz(quiz.value);
  });

  if (appQuiz.data[0].quizType === 'quiz1') {
    let quiz = document.createElement('div');
    quiz.setAttribute('class', 'card quiz1');
    quiz.innerHTML = `
            <!-- Title Card -->
            <header>
              <h3>Quiz App Animali &#128005</h3>
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
                  <button id="invia-risposte-giuste" type="submit" disabled>
                    Invia
                  </button>
                </div>
              </form>
            </div>
            `

    containerQuiz1.appendChild(quiz)
    cardSelection.style.transform = 'translateX(-150%)';
    cardSelection.style.opacity = '0';
    cardSelection.style.position = 'absolute';
    containerAll.style.height = '100%'
  } else {
    let quiz = document.createElement('div');
    quiz.setAttribute('class', 'card quiz2');
    quiz.innerHTML = `
            <!-- Title Card -->
            <header>
              <h3>Quiz App Storico</h3>
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
                  <button id="invia-risposte-giuste" type="submit" disabled>
                    Invia
                  </button>
                </div>
              </form>
            </div>
            `

    containerQuiz1.appendChild(quiz)
    cardSelection.style.transform = 'translateX(-150%)';
    cardSelection.style.opacity = '0';
    cardSelection.style.position = 'absolute';
    containerAll.style.height = '100%'
  }

  let btnAnswer = document.querySelector('#invia-risposte-giuste');
  let inputQuiz = document.querySelectorAll('input');
  inputQuiz.forEach(quizSelected => {
    quizSelected.addEventListener("click", function (e) {
      btnAnswer.classList.add('btn-activated-select');
      btnAnswer.removeAttribute('disabled');
    });
    // Recupero il valore di ogni risposta
    const answerValue = quizSelected.value;
    // Aggiungo le risposte all'array
    appQuiz.ricezioneRisposte(answerValue);
  })
  console.log(appQuiz.data);

  let form = document.getElementById('form-quiz');
  form.addEventListener('submit', (e) => {
    //Blocco il reload della pagina all'invio del form:
    e.preventDefault();


    // if (appQuiz.data[1].answers.length >= 5) {
    //   alert('Verifica delle risposte in corso...')
    //   card.classList.add('rimuovi-quiz');
    //   if (appQuiz.data.quizType === 'quiz1') {
    //     //Utente ha selezionato Quiz Animali.
    //     appQuiz.checkScore(quiz1)
    //     appQuiz.data[1].answers = [];
    //   } else if (appQuiz.data.quizType === 'quiz2') {
    //     //Utente ha selezionato Quiz Storico.
    //     appQuiz.checkScore(quiz2)
    //     appQuiz.data[1].answers = [];
    //   } else {
    //     //Richiamo la funzione di gestione degli errori se tutte le condizioni non si verificano.
    //     appQuiz.checkError();
    //   }
    // } else {
    //   alert('Seleziona le risposte richieste!!')
    // }
  })
})

btnActivatedSelect();

//Mando le risposte all'invio delle risposte:

console.log(appQuiz.data);   // //Rimuovo il quiz completato:

  //TODO: Capire quale quiz ha scelto l'utente;
  //TODO: Calcolare il punteggio delle risposte;
  //TODO: Mostra punteggio ottenuto;
  // console.log(`Il tuo punteggio è ${score}`);
  //Gestione e cattura degli errori.
  //TODO: Verificare la risposta del pop-up.
  // setTimeout(() => {
  //     if (data.mailReceived === true) {
  //         console.log('Hai accettato le nostre newsletter!');
  //     } else {
  //         console.log('Newsletter rifiutate.');
  //     }
  // }, 2000);