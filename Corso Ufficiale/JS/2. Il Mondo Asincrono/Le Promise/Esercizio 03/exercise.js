/*
Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
-Utilizzare setTimeout per simulare un'operazione asincrona.
*/

let sum = 12 + 3;
console.log("I'm doing the calculation...");

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sum % 2 == 0) {
                resolve(`The sum is even, and is: ${sum}`)
            } else {
                reject(new Error('Error 404!... The sum must be even!'))
            }
        }, 2000);
    });
}

promise()
.then((data) => {
    console.log(data)
}).catch((error) => {
    console.error(error)
});
    


