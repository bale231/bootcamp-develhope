let containerAll = document.querySelector('.container');
let loading = document.querySelector('.container-loader');

//Dati ricevuti da Front-End
let date = {
  quizType: 1,
  answers: [],
  mailReceived: false
};

//Prendo i form e i vari input:
let form = document.getElementById('form-quiz');
let answers = document.querySelectorAll('input');
let btnAnswer = document.getElementById('invia-risposte');
let quizApp = document.querySelector('.card');
//Dati recuperati dal database
let quiz1 = ['tigre', 'giraffa', 'leone', 'gatto', 'pappagallo'];
let quiz2 = ['Napoleone', 'Cesare', 'Camillo Benso', 'Badoglio', 'Mussolini'];

//Evento che rende il bottone cliccabile:
answers.forEach(answer => {
  answer.addEventListener("click", function () {
    btnAnswer.classList.add('btn-activated');
    btnAnswer.removeAttribute('disabled');
  })
})

//Evento che manda le risposte e le controlla:
form.addEventListener('submit', (e) => {
  //Blocco il reload della pagina all'invio del form:
  e.preventDefault();
  //Controllo ogni singolo input del quiz:
  answers.forEach(element => {
    if (element.checked) {
      date.answers.push(element.value)
    }
  });

  //Controllo le rispose selezionate e mando il form se sono state selezionate quelle richieste:
  if (date.answers.length >= 5) {
    let loader = document.createElement('div')
    loader.innerHTML = `
            <h3>Verifica delle risposte in corso...</h3>
            <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
              <circle
                class="pl__ring pl__ring--a"
                cx="120"
                cy="120"
                r="105"
                fill="none"
                stroke="#000"
                stroke-width="20"
                stroke-dasharray="0 660"
                stroke-dashoffset="-330"
                stroke-linecap="round"
              ></circle>
              <circle
                class="pl__ring pl__ring--b"
                cx="120"
                cy="120"
                r="35"
                fill="none"
                stroke="#000"
                stroke-width="20"
                stroke-dasharray="0 220"
                stroke-dashoffset="-110"
                stroke-linecap="round"
              ></circle>
              <circle
                class="pl__ring pl__ring--c"
                cx="85"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                stroke-width="20"
                stroke-dasharray="0 440"
                stroke-linecap="round"
              ></circle>
              <circle
                class="pl__ring pl__ring--d"
                cx="155"
                cy="120"
                r="70"
                fill="none"
                stroke="#000"
                stroke-width="20"
                stroke-dasharray="0 440"
                stroke-linecap="round"
              ></circle>
            </svg>
    
            `;
    loading.appendChild(loader);
    if (date.quizType === 1) {
      //Utente ha selezionato Quiz Animali.
      checkScore(date, quiz1)
      date.answers = [];
    } else if (date.quizType === 2) {
      //Utente ha selezionato Quiz Storico.
      checkScore(date, quiz2)
      date.answers = [];
    } else {
      //Richiamo la funzione di gestione degli errori se tutte le condizioni non si verificano.
      checkError();
    }
  } else {
    date.answers = [];
    alert('Seleziona le risposte richieste!!')
  }
})

//TODO: Capire quale quiz ha scelto l'utente;
//TODO: Calcolare il punteggio delle risposte;

function checkScore(data, arr) {
  let score = 0;
  data.answers.forEach(answer => {
    //TODO: Verificare le risposte;
    if (answer === arr[data.answers.indexOf(answer)]) {
      score++
    }
  });

  //TODO: Mostra punteggio ottenuto;
  quizApp.classList.add('toggle-active');
  setTimeout(() => {
    loading.style.display = 'none';
    let containerResult = document.querySelector('.container-result');
    let response = document.createElement('div')
    response.setAttribute('class', 'animation-active-container');
    response.innerHTML = `
          <form id="newsletter">
            <div class="card-result">
            <div class="header">
              <div class="image">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M20 7L9.00004 18L3.99994 13"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="content">
                <span class="title">Quiz completato con successo!</span>
                <p class="message">Grazie per aver giocato al nostro quiz, il tuo punteggio è ${score}/5.</p>

                <div class="container-general-newsletter">
                <label class="container-newsletter">
                  <input type="checkbox" id="checkbox"/>
                  <svg
                    class="bell-regular"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"
                    ></path>
                  </svg>
                  <svg
                    class="bell-solid"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                    ></path>
                  </svg>
                </label>
                <div class="container-text-newsletter">
                  <span>Iscriviti alle Newsletter per rimanere aggiornato sui nuovi Quiz!</span>
                </div>
              </div>    
              <div class="input-container">
                <input class="input" name="email" type="email" required>
                <label class="label-email" for="input">Inserisci la tua Email</label>
                <div class="topline"></div>
                <div class="underline"></div>
                <button role="button" class="button-name">Invia</button>
              </div>          
              </div>
            </div>
            </div>
            </form>
            <div class="btn-reload-container">
            <a href="index.html">
            <button type="button" class="button-refresh">
              <span class="button__text">Indietro</span>
              <span class="button__icon"><svg class="svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path><path d="M0 0h48v48h-48z" fill="none"></path></svg></span>
            </button>
            </a>
            </div>
            `;
    containerResult.appendChild(response);
    containerAll.style.height = '100vh';

    //Evento che manda il form per le Newsletter:
    let formNewsletter = document.getElementById('newsletter')
    formNewsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      let checkbox = document.querySelector('#checkbox');

      if (checkbox.checked) {
        alert('Grazie per aver accettato le nostre newsletter!');
        date.mailReceived = true;
        let inputNewsletter = document.querySelector('.input');
        localStorage.setItem('email-newsletter', inputNewsletter.value);
        localStorage.getItem('email-newsletter');
        inputNewsletter.value = "";
        console.log(date);
      }
    })
  }, 3000);
}

//Gestione e cattura degli errori.
function checkError() {
  try {
    if (date.quizType > 2 || typeof (date.quizType) === "string" || typeof (date.quizType) === "boolean") {
      throw new Error('Quiz inexistent')
    }
  } catch (error) {
    console.error(error)
  }
}