/*Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 
utilizzando Promises per una migliore gestione degli errori.
La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.*/
const stated = { name: "John", age: 30 };

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (stated) === "object" && typeof (stated.name) === "string" && typeof (stated.age) === "number") {
                resolve(`User is ${JSON.stringify(stated)}`)
            } else if (typeof (stated) !== "object") {
                reject(new Error('Date is incorrect.'))
            } else if (typeof (stated.name) !== "string") {
                reject(new Error('Name it must be word.'))
            } else if (typeof (stated.age) !== "number") {
                reject(new Error('Age it must be a number.'))
            }
        }, 1000);
    })
}

fetchDataFromAPI()
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });