// function printName(callback, str){
//     callback(str)
// };

// function printCallback(a){
//     console.log(a);
// };

//printName(printCallback, "I'm Callback.")



function printName(callback){
    callback()
};


printName(() => console.log('Mario'))