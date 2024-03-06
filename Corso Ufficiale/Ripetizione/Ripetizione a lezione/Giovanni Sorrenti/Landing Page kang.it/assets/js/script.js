//Select element in HTML:
let footerPage = document.querySelector('.footer-page');
//Var on date copiryght
let date = new Date();
let year = date.getFullYear();
footerPage.innerHTML = `<span>Copyright © ${year} <a href='https://www.kang.it/'><strong>Kang</strong></a></span>`;

/*  -----------------------------------------------------------------------------------------------
                    Code JS to open form section
--------------------------------------------------------------------------------------------------- */
let titleFooter = document.getElementById('footer-title')
let btn = document.getElementById('form-menu');
let containerForm = document.querySelector('.container-form');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    containerForm.classList.toggle('visible');
})

titleFooter.addEventListener('click', (e) => {
    containerForm.classList.toggle('visible');
})