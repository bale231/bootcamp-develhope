/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, 
come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. 
-Utilizzare setTimeout per simulare il ritardo dell'operazione.*/
const stated = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
    setTimeout(() => {
        callback(stated)
    }, 1000)
};

function handleData(data) {
    console.log('Data received is: '+  JSON.stringify(data));
};

fetchDataFromAPI(handleData)