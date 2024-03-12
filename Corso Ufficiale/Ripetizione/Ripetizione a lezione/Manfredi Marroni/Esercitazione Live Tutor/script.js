let btn = document.querySelector('button');
let input = document.getElementById('search');
let main = document.querySelector('main');
let form = document.getElementById('dictionary');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    async function dictionaryApi(dictionaryWord) {
        const fetchApi = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryWord}`);
        const api = await fetchApi.json();
        console.log(api);
        api.forEach(element => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.style.width = '18rem';
            card.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">LICENSE: ${element.license.name}</h5>
            <a href="${element.license.url}" class="card-link">${element.license.url}</a>
            <h6 class="card-subtitle mt-4 text-body-secondary">
            Word: ${element.word}
            </h6>
            <p class="card-text">
              Phonetic: ${element.phonetics[1].text}
            </p>
            <p class="card-text">
                Meaning: ${element.meanings[0].definitions[0].definition}
            </p>
            <h6>Source URL:</h6>
            <a href="${element.sourceUrls}" class="card-link">${element.sourceUrls}</a>
          </div>
    
            `
            main.appendChild(card);
        });

    }
    dictionaryApi(input.value);
})