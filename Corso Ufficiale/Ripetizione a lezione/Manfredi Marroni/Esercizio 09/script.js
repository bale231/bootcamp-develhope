/*
creaiamo una funzione checkGames che accetta un parametro e restituisce una promise.
Se il parametro è un array, la funzione si risolve dopo 1 secondo restituendo un array che
contiene gli utenti che hanno tra i giochi preferiti Halo Infinite. altrimenti la promise
viene rigettata con il messaggio
'il parametro non è un array'. Per risolvere la promise utilizzate async await.
*/

//Database data:
class Users {
    constructor(){
        this.users = [
            {
                username: "JohnDoe",
                favoriteGames: ["The Legend of Zelda: Breath of the Wild", "Red Dead Redemption 2", "Halo Infinite"]
            },
            {
                username: "JaneSmith",
                favoriteGames: ["Overwatch", "Minecraft", "Animal Crossing: New Horizons"]
            },
            {
                username: "Gamer123",
                favoriteGames: ["Call of Duty: Warzone", "Assassin's Creed Valhalla", "Apex Legends"]
            },
            {
                username: "PlayerX",
                favoriteGames: ["Cyberpunk 2077", "Halo Infinite", "The Witcher 3: Wild Hunt"]
            },
            {
                username: "GameMaster",
                favoriteGames: ["Halo Infinite", "Super Mario Odyssey", "League of Legends"]
            }
        ];

        this.emptyArr = [];
    }
    checkGames(arr) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.users.forEach(user => {
                    if (Array.isArray(arr) && user.favoriteGames.includes("Halo Infinite")) {
                        resolve(this.emptyArr)
                        return this.emptyArr.push(user.username)
                    } else {
                        reject(new Error('Il parametro non è un array.'))
                    }
                })
            }, 1000);
        })
    }
}

let user = new Users();

async function checkError() {
    try {
        const games = await user.checkGames(user.users)
        console.log(games);
    } catch (error) {
        console.error(error);
    }
}

checkError();