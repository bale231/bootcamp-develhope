/*Definire una funzione che 
accetta un array e un callback, e richiama il callback per ogni elemento dell'array:*/

const arr = [1, 2, 3, 4, 5, 6];

function layArr(array, callback){
    setTimeout(() => {
        for (i = 0; i < array.length; i++) {
            callback(array[i])
        }
    }, 1000)
};

function myCallback (element){
    console.log('Elemento: ', element)
};

layArr(arr, myCallback)