//Convertire la seguente funzione basata su callback in una funzione basata su Promise.

function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        const result = arg1 + arg2;
        setTimeout(() => {
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 1000);
    })
}

callback_BasedFunction(2, 2)
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });