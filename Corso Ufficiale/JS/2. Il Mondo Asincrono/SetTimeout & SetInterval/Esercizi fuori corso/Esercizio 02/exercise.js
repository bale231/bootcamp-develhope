/*Definire una funzione che accetta un valore e un callback, 
e richiama il callback passando il valore come argomento:*/

function runCallback(value, callback){
    callback(value)
};

function resultCallback(fullValue){
    console.log(`This callback have a ${fullValue} on value.`)
};

runCallback(8, resultCallback)