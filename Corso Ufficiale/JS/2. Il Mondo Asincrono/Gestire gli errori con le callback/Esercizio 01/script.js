/*Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. 
Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.*/

//This function handles errors:
function performOperation(a, b, callback) {
    const sum = a + b;
    if (sum === Number(sum) && sum !== NaN && sum !== Infinity && sum !== -Infinity) {
        callback(null, sum)
    } else {
        callback(new Error("Ops! Qualcosa è andato storto."), null)
    }
}

//Instead, this function catches the error: 
function displayResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(`Sum is ${result}`)
    }
}

performOperation(5, 3, displayResult);












/*METODO TRY-CATCH*/
// function performOperation(a, b, callback) {
//     const sum = a + b;
//     callback(sum)
// };

// function displayResult(result) {
//     try {
//         if(result !== 8){
//             console.log(result);
//         }else{
//             throw new Error('The result is incorrect.');
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };

// performOperation(5, 3, displayResult)