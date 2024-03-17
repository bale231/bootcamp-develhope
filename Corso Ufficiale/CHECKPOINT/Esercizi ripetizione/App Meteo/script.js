const input = document.querySelector('input');
const btnSearch = document.querySelector('#btn-search');
const containerInfoMeteo = document.querySelector('.container-info-meteo')
const date = new Date();
const dayMeteo = date.getDate();
const numeroMese = date.getMonth();
const nomiMesi = [
    "Gennaio", "Febbraio", "Marzo", "Aprile",
    "Maggio", "Giugno", "Luglio", "Agosto",
    "Settembre", "Ottobre", "Novembre", "Dicembre"
];
const nomeMese = nomiMesi[numeroMese];

btnSearch.addEventListener('click', async () => {
    const fetchURL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=8c679d9817401dbf31cb36b41cf5bec2&units=metric`)
    const data = await fetchURL.json();
    console.log(data);
    const nome = data.name;
    const temperatura = Math.round(data.main.temp);
    
    //Creo un container e stampo i dati del API al  Front-end
    let containerMeteo = document.createElement('div');
    containerInfoMeteo.innerHTML = "";
    containerMeteo.innerHTML = `
    <div class="card-header">
        <span>${nome}</span>
        <span>${nomeMese} ${dayMeteo}</span>
    </div>
    <span class="temp">${temperatura}°</span>
    <div class="temp-scale">
        <span>Celcius</span>
    </div>
`;

    containerInfoMeteo.appendChild(containerMeteo)

    function saveMeteo(citta, mese, giorno, temperatura){
        sessionStorage.setItem('città', citta);
        sessionStorage.setItem('mese', mese);
        sessionStorage.setItem('giorno', giorno);
        sessionStorage.setItem('temperatura', temperatura);
    }

    saveMeteo(nome, nomeMese, dayMeteo, temperatura)
    
    const savedCity = sessionStorage.getItem('città');
    const savedMonth = sessionStorage.getItem('mese');
    const savedDay = sessionStorage.getItem('giorno');
    const savedTemperature = sessionStorage.getItem('temperatura');

    if(savedCity && savedMonth && savedDay && savedTemperature)
    saveMeteo(savedCity, savedMonth, savedDay, savedTemperature)
})