/*
Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. 
-Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.
*/

const user = { id: 1, name: 'John' };
const post = ['Post 1', 'Post 2', 'Post 3'];

//Funzione che va a prendere il nome utente;
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.id > 0 && typeof user.name === "string") {
                resolve(`The user name is: ${user.name}`)
            } else {
                reject(new Error('User is undefined.'))
            }
        }, 1000);
    })
}

//Funzione che va a prendere i post dell'utente selezionato.
function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve(`The user ${userName} have a ${post}`)
            } else {
                reject(new Error('The user-post is undefined.'))
            }
        }, 1000);
    })
}


fetchUserData()
    .then((data) => {
        console.log(data);
        return fetchUserPosts(user.id, user.name)
    }).then((res => {
        console.log(res);
    }))
    .catch((error) => {
        console.error(error);
    });