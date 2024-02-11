/**
 * The plugin WooCommerce Checkout Manager
 *
 * Plugin to manage woocommerce checkout with beautiful integrations
 * https://www.w3schools.com/jsref/jsref_tolocalestring.asp
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 * https://www.w3schools.com/jsref/jsref_parsefloat.asp
 *
 *
 * @wordpress-plugin
 * Script Name:       WooCommerce Checkout Manager
 * WooCommerce API URI:    https://woo.com/it-it/
 * Stripe API URI:     https://stripe.com/docs/api?lang=php
 * WooCommerce URI:    https://github.com/woocommerce/woocommerce-rest-api-docs/blob/trunk/source/includes/wp-api-v3/_orders.md
 * Description:       Plugin to manage woocommerce checkout with beautiful integrations.
 * Version:           1.0.0
 * Author:            Luigi Balestrucci
 * Domain Path:       /
 */

//Dati dal Front-end;
const objInfo =
{
    "id": 4750,
    "number": "4750",
    "order_key": "wc_order_Q6tuhq12KJOel",
    "status": "completed",
    "currency": "EUR",
    "billing": {
        "first_name": "Marco",
        "last_name": "Rossi",
        "company": "Develhope",
        "address_1": "Via Test",
        "address_2": "",
        "city": "Milano",
        "state": "IT",
        "postcode": "1231234",
        "country": "Milano",
        "email": "test@test.com",
        "phone": "999999"
    },
    "shipping": {
        "first_name": "Marco",
        "last_name": "Rossi",
        "company": "Develhope",
        "address_1": "Via Test",
        "address_2": "",
        "city": "Milano",
        "state": "IT",
        "postcode": "99999999",
        "country": "Milano"
    },
    "payment_method": "stripe",
    "payment_status": "unpaid",
    "line_items": [
        {
            "id": 2593,
            "name": "Supporto bruciatore tripla corona venturo cucina gas Smeg",
            "product_id": 626,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "1590",
            "subtotal_tax": "0",
            "total": "1590",
            "total_tax": "0",
            "taxes": [],
            "meta_data": [],
            "sku": "5e519142e647469316de29c",
            "price": 1590
        },
        {
            "id": 2093,
            "name": "5 SACCHETTI ASPIRAPOLVERE BIDONE ASPIRATUTTO AQUAVAC - NS 264",
            "product_id": 621,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "625",
            "subtotal_tax": "0",
            "total": "625",
            "total_tax": "0",
            "taxes": [],
            "meta_data": [],
            "sku": "5e519da42e647439316de29c",
            "price": 625
        },
        {
            "id": 3093,
            "name": "5 SACCHETTI ASPIRAPOLVERE CARREFOUR BVC 2000 - NS 240",
            "product_id": 624,
            "variation_id": 0,
            "quantity": 2,
            "tax_class": "",
            "subtotal": "390",
            "subtotal_tax": "0",
            "total": "780",
            "total_tax": "0",
            "taxes": [],
            "meta_data": [],
            "sku": "5e519da42e647469346de29c",
            "price": 390
        },
        {
            "id": 6093,
            "name": "FOLLETTO SPAZZOLA HD35 PER ASPIRAPOLVERE VK135 VK136 VK140 VK150 - COMPATIBILE",
            "product_id": 694,
            "variation_id": 0,
            "quantity": 2,
            "tax_class": "",
            "subtotal": "3260",
            "subtotal_tax": "0",
            "total": "3260",
            "total_tax": "0",
            "taxes": [],
            "meta_data": [],
            "sku": "5e519da42e647469346de29c",
            "price": 3260
        }
    ],
    "shipping_lines": [
        {
            "method_id": "gls",
            "method_title": "GLS",
            "total": 10
        }
    ],
    "coupon_lines": [
        {
            "code": "10off",
            "discount_type": "percent",
            "amount": 10,
            "individual_use": true,
            "exclude_sale_items": true,
            "minimum_amount": 100.00
        },
    ],
}

/************************** Reset payment.js ******************************/

//Funzione che fa la somma dei prezzi nel carrello:
function sum() {
    return objInfo.line_items.reduce((acc, price) => acc + price.price, 0)
}

//Funzione che fa la somma del totale + la spedizione
function sumTotal() {
    return sum() + objInfo.shipping_lines[0].total
}

//Funzione che aplica il coupon:
function checkCoupon(somma) {
    return somma - (somma * objInfo.coupon_lines[0].amount) / 100;
}

/**************************************************************************/

//Controlla cosa sta acquistando l'utente e quanto deve andare a pagare;
function checkBuy(sum) {
    return new Promise((resolve, reject) => {
        if (objInfo.status === "completed") {
            objInfo.line_items.forEach(element => {
                console.log(`L'utente sta acquistando:  ${element.name} con un costo di ${element.price}${objInfo.currency}`)
            })
            resolve(`Totale spesa: ${sum}${objInfo.currency}`);
        } else if (objInfo.status === "pending") {
            resolve(`Pagamento di ${sum}${objInfo.currency} in corso...`)
        } else {
            reject(alert(new Error("404! Qualcosa è andato storto!")))
        }
    })
}

//Funzione che fa la somma degli oggetti nel carrello e se c'è un coupon lo applica:
function totalCart() {
    try {
        if (objInfo.coupon_lines && objInfo.coupon_lines[0].individual_use === true) {
            return checkCoupon(sumTotal());
        } else {
            return sumTotal();
        }

    } catch (error) {
        console.error(error);
    }
}

//Controllare il metodo di spedizione scelto dall'utente:
function shippingMethod() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            objInfo.shipping_lines.filter(shipping => {
                if (shipping.method_id !== "") {
                    resolve(`Gli articoli selezionati saranno spediti con ${shipping.method_id} per un costo di ${shipping.total}${objInfo.currency}.`)
                } else {
                    reject(alert(new Error('Seleziona un metodo di spedizione!')))
                }
            })
        }, 2000);
    })
}

//Invia utente a un gateway di pagamento scelto;
function paymentMethod() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (objInfo.payment_method !== "") {
                resolve(`Collegamento in corso a ${objInfo.payment_method}...`)
            } else {
                reject(alert(new Error("Selezionare un metodo di pagamento.")))
            }
        }, 500);
    })
}

//Verificare pagamento e vedere se andato a buon fine e mandare la chiamata al metodo di spedizione.
function verifyPayment(totalPaid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (objInfo.payment_status === "paid") {
                objInfo.shipping_lines.filter(shipping => resolve(`Il pagamento di ${totalPaid}${objInfo.currency} è andato a buon fine! Grazie per aver acquistato dal nostro store!! i pacchi saranno spediti presto presso ${shipping.method_title}`))
            } else {
                reject(new Error("Pagamento rifiutato! Ritenta o modifica il tuo metodo di pagamento."))
            }
        }, 1000);
    })
}


async function checkError() {
    try {
        const cartBuy = await checkBuy(totalCart())
        console.log(cartBuy);

        const shipping = await shippingMethod()
        console.log(shipping);

        const redirect = await paymentMethod()
        console.log(redirect);


        const verify = await verifyPayment(totalCart())
        console.log(verify);

    } catch (error) {
        console.error(error);
    }
}

checkError();