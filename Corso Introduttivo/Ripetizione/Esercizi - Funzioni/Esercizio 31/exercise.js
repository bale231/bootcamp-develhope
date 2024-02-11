function sayHelloName (printName) {
    console.log("Hello");
    printName();
}

function printName () {
    console.log("Luigi");
}

sayHelloName(printName);