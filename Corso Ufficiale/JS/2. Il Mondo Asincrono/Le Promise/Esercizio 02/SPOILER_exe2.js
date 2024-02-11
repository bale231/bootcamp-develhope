// crea una catena di promises per simulare un'operazione asincrona in più fasi.
// la prima promise recupera i dati dell'utente {id: 1, name: 'John'}.
// la seconda promise recupera i post dell'utente ['post 1', 'post 2', 'post 3'].
// chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titolo dei post.

const user = { id: 1, name: 'John' };
const post = ['Post 1', 'Post 2', 'Post 3'];

//Funzione che va a prendere il nome utente;
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isNaN(user.id) && user.id > 0 && typeof user.name === "string" && user.name.trim() !== '') {
                resolve(`The user data is the following; 
                number ID: ${user.id} and name:${user.name}`)
            } else {
                reject(new Error('User data is undefined.'))
            }
        }, 1000);
    })
}

//Funzione che va a prendere i post dell'utente selezionato.
function fetchUserPosts(userId, userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1 && userName === "John") {
                resolve(`The data retrieve of the user Id: ${user.id}, name: ${user.name} have ${post.length} post:`);
            } else {
                reject(new Error('User-post data is undefined.'))
            }
        }, 1000);
    })
}


fetchUserData()
    .then((data) => {
        console.log(data);
        return fetchUserPosts(user.id, user.name)
    }).then((postUserData) => {
        console.log(postUserData);
        console.log(`${post[0]}`);
        return postUserData;
    }).then((postUserData) => {
        console.log(`${post[1]}`);
        return postUserData;
    }).then((postUserData) => {
        console.log(`${post[2]}`);
        return postUserData;
    }).catch((error) => {
        console.error(error);
    });