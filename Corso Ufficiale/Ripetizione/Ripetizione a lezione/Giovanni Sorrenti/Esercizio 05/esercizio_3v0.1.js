/********
 Esercizio 5: Simulazione di una pagina Login/Register.
 Unisci l'esercizio 3 all'esercizio 4 per simulare una pagina di login/register.
*******/

class UsersRegistered {
    constructor() {
        this.users = []
    };

    addUser(username, password) {
        this.users.push({
            username,
            password
        })
    }

    removeUser(index) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let userSplice = this.users.splice(index, 1)
                resolve(userSplice)
            }, 2000);
        })
    }

    viewUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let viewUser = this.users
                resolve(viewUser)
            }, 1000);
        })
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let verify = this.users.some(user => username === user.username && password === user.password);
                if (verify) {
                    resolve(`Bentornato ${username} !!`);
                } else {
                    reject(new Error("Username o password errate!, per modificare l'username e la password contattare l'assistenza."))
                }
            }, 3000);
        })
    }
};

let userInfo = new UsersRegistered();

//Utenti appena registrati:
userInfo.addUser('bale231', 'password123');
userInfo.addUser('alec345', 'Wrongpassword');
userInfo.addUser('andrew33', 'password456477');
userInfo.addUser('manfre32', '1245378');
userInfo.addUser('giova_00', 'dhsjyeuud');
console.log("Lista utenti Database:", userInfo.users);

async function checkError() {
    try {
        //Elimino l'utente inattivo:
        await userInfo.removeUser(0);
        console.log('Un utente è stato rimosso..');

        //Visualizzo utenti rimanenti nel database:
        let view = await userInfo.viewUser()
        console.log("Utenti rimanenti:", view);

        //Controllo le credenziali
        let login1 = await userInfo.login('alec345', 'Wrongpassword');
        let login2 = await userInfo.login('andrew33', 'password456477');
        console.log("Login effettuato con successo!!, ", login1);
        console.log("Login effettuato con successo!!, ", login2);
    } catch (error) {
        console.error(error);
    }
}

checkError()