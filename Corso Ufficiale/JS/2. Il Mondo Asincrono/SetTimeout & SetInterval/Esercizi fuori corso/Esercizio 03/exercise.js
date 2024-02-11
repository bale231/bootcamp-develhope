//Simulare una chiamata asincrona utilizzando un setTimeout e un callback:

function asyncCall (callback){
    setTimeout(() => {
        callback('This call is async')
    }, 2000)
};

function myCallback (){
    console.log('this is my callback')
};

asyncCall(myCallback)