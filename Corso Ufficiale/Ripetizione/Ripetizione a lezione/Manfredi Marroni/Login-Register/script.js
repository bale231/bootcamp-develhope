const form = document.querySelector('form');
const register = document.querySelector('.register');
const userName = document.querySelector('#username');
const passwordUser = document.querySelector('#password');
const users = [
    {
        username: "user1",
        password: "password1"
    },
    {
        username: "user2",
        password: "password2"
    },
    {
        username: "user3",
        password: "password3"
    }
]

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = e.target.username.value;
    const password = e.target.password.value;
    // let isRegistered = false;
    const userData = {
        username,
        password
    }

    // users.forEach(user => {
    //     if (user.username === userData.username && user.password === userData.password) {
    //         isRegistered = true;
    //     }
    // })

    // if (isRegistered) {
    //     alert('Utente loggato con successo!!');
    // } else {
    //     alert('Registrati prima di effettuare il Login!!');
    // }

    const findUser = users.find(user => user.username === userData.username && user.password === userData.password);
    if (findUser) {
        alert('Utente loggato con successo!!');
    } else {
        alert('Registrati prima di effettuare il Login!!');
    }
})

register.addEventListener('click', (e) => {
    e.preventDefault();
    if (userName.value && passwordUser.value) {
        const usernameRegistered = userName.value;
        const passwordRegistered = passwordUser.value;
        const userData = {
            username: usernameRegistered,
            password: passwordRegistered
        };

        const findUser = users.find(user => user.username === userData.username && user.password === userData.password);
        if (findUser) {
            alert('Utente già registrato!')
        } else {
            users.push(userData);
            alert('Utente registrato con successo!');
            console.log(users);
        }

    } else {
        alert('Compilare tutti i campi!!');
    }
})