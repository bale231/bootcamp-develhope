//RIPETIZIONE PROMISE
const arrayNum = [1, 2, 3, 4, 5, 6];
const arrayNames = ['Luigi', 'Alessandro', 'Francesco', 'Francesca'];



function sum(arr) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (arr.length >= 6) {
                    let somma = arr.reduce((acc, num) => acc + num, 0);
                    resolve(`La somma dei numeri dell'array è: ${somma}.`)
                } else {
                    reject(new Error("L'Array ha una lunghezza minore di 6!!"))
                }
            }, 1500)
        } catch (error) {
            console.error(error);
        }
    })
}

function namesUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (user.length <= 4) {
                    resolve(`Gli utenti presenti sono 4 e sono ${user}`)
                } else {
                    reject(new Error('Limite massimo di utenti raggiunto!!'))
                }
            } catch (error) {
                console.error(error);
            }
        }, 1000);
    })
}

async function checkError() {
    const users = await namesUser(arrayNames);
    console.log(users)
    const arraySum = await sum(arrayNum);
    console.log(arraySum)
}

checkError();

// Promise.all([namesUser(arrayNames), sum(arrayNum)])
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))

// Promise.race([namesUser(arrayNames), sum(arrayNum)])
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error))

// sum(arrayNum)
//     .then((data) => {
//         console.log(data);
//         return namesUser(arrayNames)
//     })
//     .then((data2) => console.log(data2))
//     .catch((error) => console.log(error))