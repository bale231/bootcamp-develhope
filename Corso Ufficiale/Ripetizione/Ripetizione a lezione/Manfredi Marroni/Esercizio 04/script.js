//shop e-commerce:
const products = [
    {
        id: 1,
        name: 'Product A',
        price: 29.99,
        category: 'Electronics',
    },
    {
        id: 2,
        name: 'Product B',
        price: 39.99,
        category: 'Clothing',
    },
    {
        id: 3,
        name: 'Product C',
        price: 9.99,
        category: 'Home & Kitchen',
    },
    {
        id: 4,
        name: 'Product D',
        price: 49.99,
        category: 'Electronics',
    }
];

//TODO: Creare una funzione che mostra tutti i prodotti presenti:
function allProducts() {
    setTimeout(() => {
        console.log('Products: ', products);
    }, 1000);
}

allProducts();

//Funzione per aggiungere i prodotti al carrello:
console.log('Select a product.');
let shop = [];

function addProducts(id) {
    shop.push(id)
}

setTimeout(() => {
    addProducts(products[0])
    addProducts(products[1])
    addProducts(products[2])
    console.log('Item added to your shop: ', shop);
}, 4000);

//Funzione per eliminare i prodotti dal carrello:
function deleteProduct(id){
    setTimeout(() => {
        let deleted = shop.filter(product => {
            return product.id !== id
        })
        shop = deleted; 
        console.log('Shop Products: ', shop);
    }, 6000);
}

deleteProduct(3);

//Somma carrello:
setTimeout(() => {
    function sumShop(){
        let sum = shop.reduce((a,num) => a + num.price, 0)
        console.log('Total Shop:', Math.round(sum) + '€')
    }
    
    sumShop();
}, 8000);
