/*Scrivi una funzione filterOutOdds che accetta un numero qualsiasi 
di argomenti e restituisce un array contenente solo i numeri pari.
Utilizzare il parametro rest per raccogliere gli argomenti.*/

function filterOutOdds(...rest){
    return rest.filter(params => params % 2 === 0)
};

const postiveNumber = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8);

console.log(postiveNumber)