let arrayFruits = ["apple", "banana", "orange", "grape", "kiwi"];

function promise(shop) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shop.length !== 0) {
                resolve(shop);
            } else {
                reject(new Error("Shop is empty."))
            }
        }, 1000);
    })
}

// promise(stringArray)
//     .then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     })

function newPromise(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (array.length !== 0) {
                let upperCase = array.map(string => string.toUpperCase())
                resolve(upperCase)
            } else {
                reject(new Error("Shop is empty."))
            }
        }, 1000);
    })
}

async function fetchData() {
    try {
        const itemsBuy = await promise(stringArray)
        console.log(`List buying fruits: ${itemsBuy}`);
        const upper = await newPromise(itemsBuy)
        console.log(`Fruits upperCase: ${upper}`);
    } catch (error) {
        console.error(error);
    }
}

fetchData();