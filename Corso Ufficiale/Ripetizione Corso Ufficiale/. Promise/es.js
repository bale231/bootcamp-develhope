const arrayNum = [1, 2, 3, 4, 5, 7];

function sum(num) {
    let somma = num.reduce((acc, number) => acc + number, 0);
    try {
        if (somma <= 21) {
            console.log(`La somma dell'array è ${somma}`);
        } else {
            throw new Error(`La somma è sbagliata.`)
        }
    } catch (error) {
        console.error(error);
    }
}

sum(arrayNum)