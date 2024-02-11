//Definire una funzione che accetta un callback e lo richiama:

function runCallback(callback){
    callback()
};

function callbackRunning(){
    console.log('The callback is running!!')
};

runCallback(callbackRunning)