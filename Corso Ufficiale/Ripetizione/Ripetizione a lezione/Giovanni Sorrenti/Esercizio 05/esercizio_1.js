/********
 Esercizio 3: Simulazione di un Sistema di Login
 Crea una classe Utente che ha proprietà come username e password.
 Implementa una funzione di login che accetti username e password come parametri e restituisca 
 un messaggio di successo o di errore.
 *******/

//Dati conserati nel database:
class UtentiRegistrati {
    constructor() {
        this.users = [
            { username: 'admin', password: 'admin123' },
            { username: 'user1', password: 'password123' },
            { username: 'user2', password: 'password147' },
        ];
    }

    //Funzione di controllo e gestione degli errori delle credenziali d'accesso:
    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //Metodo some, controlla se l'username e la password ricevuti dal front-end sono true o false:
                let verify = this.users.some(user => username === user.username && password === user.password);
                if (verify) {
                    resolve(`Bentornato ${username} !!`);
                } else {
                    reject(new Error("Username o password errate!, per modificare l'username e la password contattare l'assistenza."))
                }
            }, 1500);
        })
    }
}

let user = new UtentiRegistrati();

//Controllo utenti salvati nel database:
console.log("Utenti presenti:", user.users);

async function checkLogin() {
    try {
        //Dati ricevuti dal front-end:
        let login1 = await user.login('admin', 'admin123');
        let login2 = await user.login('user1', 'password123');
        console.log(login1);
        console.log(login2);
    } catch (error) {
        console.error(error);
    }
}

checkLogin();