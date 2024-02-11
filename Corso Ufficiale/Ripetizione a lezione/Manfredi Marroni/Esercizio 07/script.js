//Verifica se nell'array "numbers" ci sono numeri duplicati o meno creando una funzione.
/* Se ci sono duplicati stampate in console "l'array contiene duplicati"*/

const numbers = [1, 2, 3, 4, 5, 5, 6, 7];

function doubleNum(arrNum) {
    let newArr = [];
    arrNum.forEach(number => {
        if (!newArr.includes(number)) {
            newArr.push(number)
        } else {
            console.log(`${number} is a duplicate!!`);
        }
    })
    console.log(newArr);
}

doubleNum(numbers);