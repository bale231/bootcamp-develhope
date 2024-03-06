//Select element in HTML:
let footerPage = document.querySelector('.footer-page');
//Var on date copiryght:
let date = new Date();
let year = date.getFullYear();
footerPage.innerHTML = `<span>Copyright © ${year} : <a href='https://www.develhope.co/it/sign-up/'><strong>develhope.co</strong></a></span>`;

//Var to select icon hamburger:
let item = document.querySelector('.icon-hamburger');

//Event to click icon add class on body:
item.addEventListener("click", function () {
    document.body.classList.toggle('toggle-active');
});