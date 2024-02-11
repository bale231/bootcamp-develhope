function sayHelloName (printName) {
    console.log("Hello");
    setTimeout(() => {
        printName();
        
    }, 1000);
}

function printName () {
    console.log("Luigi");
}

sayHelloName(printName);