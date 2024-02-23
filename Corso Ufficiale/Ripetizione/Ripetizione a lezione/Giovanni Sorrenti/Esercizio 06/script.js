//Select element in HTML:
let footerPage = document.querySelector('.footer-page');
//Var on date copiryght:
let date = new Date();
let year = date.getFullYear();
//Insert in HTML copyright:
footerPage.innerHTML = `<span>Copyright © year : <a href='https://www.develhope.co/it/sign-up/'><strong>develhope.co</strong></a></span>`;