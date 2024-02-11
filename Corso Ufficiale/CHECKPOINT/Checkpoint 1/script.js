/**********
 Simulazione di un Sistema di Gestione Magazzino negozio
     
 *     TODO creare una funzione che, dopo qualche secondo di simulazione (simulando una richiesta al server),
 *     restituisce un nuovo array di oggetti con le seguenti proprietà:
 *     categoria: Nome della categoria.
 *     media: Media della produttività per quella categoria.
 *
 *     TODO creare una funzione che, dopo qualche secondo di simulazione (simulando una richiesta al server),
 *     inserisce una nuova voce
 *
 *     TODO creare una funzione per eliminare una voce
 *
*/

const catalogoProdotti = [
    {
        id: 1,
        categoria: 'Abbigliamento',
        prodotti: [
            { nome: 'Maglietta', prezzo: 20, taglie: ['S', 'M', 'L'] },
            { nome: 'Jeans', prezzo: 50, taglie: ['28', '30', '32', '34'] },
        ],
    },
    {
        id: 2,
        categoria: 'Calzature',
        prodotti: [
            { nome: 'Scarpe Sportive', prezzo: 80, taglie: ['38', '39', '40', '41'] },
            { nome: 'Stivali', prezzo: 120, taglie: ['36', '37', '38', '39', '40'] },
        ],
    }
];

let newArr = [];


//Funzione che, dopo qualche secondo di simulazione (simulando una richiesta al server),
//restituisce un nuovo array di oggetti con le seguenti proprietà:
//  *     categoria: Nome della categoria.
//  *     media: Media della produttività per quel prodotto.
function mediaPrezzi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            catalogoProdotti.filter(catalogo => {
                let sum = catalogo.prodotti.reduce((acc, price) => acc + price.prezzo, 0);
                let average = sum / catalogo.prodotti.length;

                newArr.push({
                    categoria: catalogo.categoria,
                    media: average
                })

                resolve(newArr)
            })
        }, 1500);
    })
}

//Funzione che inserisce una nuova voce:
function newVoice(id, categoria, prodotti) {
    return new Promise((resolve) => {
        setTimeout(() => {
            catalogoProdotti.push({
                id: id,
                categoria: categoria,
                prodotti: prodotti
            })

            resolve(catalogoProdotti)
        }, 1500);
    })
}

//Funzione per eliminare una voce:
function removeProduct(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Categoria rimossa...');
            let remove = catalogoProdotti.splice(id, 1);
            resolve(remove)
        }, 1500);
    })
}

async function checkPrice() {
    const mediaPrice = await mediaPrezzi();
    console.log(mediaPrice);

    const remove = await removeProduct(0);
    console.log(remove);

    const newProduct = await newVoice(3, 'Scarpe Nike', [{ nome: 'Scarpe', prezzo: 88, taglie: ['38', '39', '40', '41'] }]);
    console.log(newProduct);

}

checkPrice();