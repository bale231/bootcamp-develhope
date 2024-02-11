//const number = 10;
let number = 0;

switch (number){
    case 2:
        console.log('Even number.');
        break;
    case 5:
        console.log('Odd number.');
        break;
    case 7:
        console.log('The number is changed: ', number = 8);
        break;
    case 10:
        console.log(`The number is ${number}.`);
        break;
    default:
        console.log('The var is undefined.');
}

let sum = number + 10;
console.log(sum);

if(sum === 9 || sum === 10){
    console.log('Result is correct.');
}else{
    console.log('Result is incorrect.');
}