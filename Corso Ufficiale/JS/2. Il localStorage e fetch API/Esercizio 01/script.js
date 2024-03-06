const btn = document.querySelector('.btn');
const nameForm = document.querySelector('.title-name');
const email = document.querySelector('.email');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const message = document.querySelector('.printedform');

//Function to send data in local storage:
function setForm(email, name, surname){
    if(email === '' || name === '' || surname === ''){
        message.innerText = 'Inserire i dati nei campi richiesti!';
    }else{
        nameForm.innerText = name;
        localStorage.setItem('my-email', email);
        localStorage.setItem('my-firstname', name);
        localStorage.setItem('my-lastname', surname);
        message.innerText = 'Form inviato con successo!';
    }
}

btn.addEventListener('click', () => {
    const emailValue = email.value;
    const nameValue = firstName.value;
    const surnameValue = lastName.value;
    setForm(emailValue, nameValue, surnameValue);
})

const savedEmail = localStorage.getItem('my-email');
const savedName = localStorage.getItem('my-firstname');
const savedLastname = localStorage.getItem('my-lastname');

if(savedEmail && savedName && savedLastname){
    setForm(savedEmail, savedName, savedLastname);
}