/* 
Questa funzione restituisce una promise, 
se il parametro è un array la promise si risolve dopo 2 secondi inviando un array di 
oggetti che contengono le proprietà product name e totalSales, altrimenti la promise viene rigettata e con 
il messaggio di errore "il parametro non è un array". Per risolvere la promise utilizzate async await
*/
// const product = {}
const products = [
    {
        name: 'Product 1',
        sells: [
            { month: 'January', sales: 150 },
            { month: 'February', sales: 200 },
            { month: 'March', sales: 180 }
        ]
    },
    {
        name: 'Product 2',
        sells: [
            { month: 'January', sales: 120 },
            { month: 'February', sales: 170 },
            { month: 'March', sales: 190 }
        ]
    },
    {
        name: 'Product 3',
        sells: [
            { month: 'January', sales: 100 },
            { month: 'February', sales: 150 },
            { month: 'March', sales: 130 }
        ]
    }
];

let newArr = []
//Creaimo una funzione getData che accetta come parametro un array e restituisce una promise:
function getData(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Array.isArray(arr)) {
                arr.filter(product => {
                    let totalPrice = product.sells.reduce((acc, sale) => acc + sale.sales, 0)
                    newArr.push({ productName: product.name, totalSales: totalPrice })
                })
                resolve(newArr)
            } else {
                reject(new Error('Il parametro non è un array.'))
            }
        }, 2000);
    })
}


async function checkError() {
    try {
        const data = await getData(products)
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

checkError();