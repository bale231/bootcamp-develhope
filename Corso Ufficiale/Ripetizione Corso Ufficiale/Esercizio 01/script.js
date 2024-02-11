/* Esercizio 2: Scrivi una funzione che accetta come parametro una stringa che rappresenta un indirizzo web 
   e restituisce una promise che si risolve con un oggetto che contiene le seguenti proprietà:
   -protocol (il protocollo usato dall’indirizzo)
   -domain (il dominio dell’indirizzo)
   -path (il percorso dell’indirizzo).
   Usa le backtick, le condizionali if, l’operatore ternario, i timeout e le promise.
*/

class Website {
    constructor() {
        this.website = []
    }

    addWebSite(protocol, domain, path) {
        this.website.push({
            protocol,
            domain,
            path
        })
    }

    verifyProtocol() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.website.filter(protocol => {
                    if (protocol.protocol === 'HTTP') {
                        resolve(`Protocol is ${protocol.protocol} and have a based safety.`)
                    } else if (protocol.protocol === 'HTTPS') {
                        resolve(`Protocol is ${protocol.protocol} and is safety.`)
                    } else {
                        reject(new Error('Website is not safety, it cannot be accessed.'))
                    }
                })
            }, 2000);
        })
    }

    domainAddress() {
        return this.website.filter(domain => domain.domain !== "" ? console.log(`The domain address is "${domain.domain}".`) : console.log(`Domain is undefined`))
    }

    pathAddress() {
        return this.website.filter(path => console.log(`The path address is "${path.path}"`))
    }


}

//Associo la classe a una variabile "website":
let websiteURL = new Website();

//Inserisco i valori delle chiavi dell'oggetto "website":
websiteURL.addWebSite('HTTPS', 'www.google.it', 'it-IT')
console.log(websiteURL.website);

//Controllo il tipo di sicurezza del protocollo del sito:
async function checkProtocol() {
    try {
        const verify = await websiteURL.verifyProtocol()
        console.log(verify);
    } catch (error) {
        console.error(error);
    }
}

checkProtocol();

//Verifico che il dominio del sito sia scritto correttamente:
websiteURL.domainAddress()

//Controllo il percorso dell'indirizzo:
websiteURL.pathAddress()