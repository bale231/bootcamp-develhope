//Select element in HTML:
let footerPage = document.querySelector('.footer-page');
let item = document.querySelector('#apply-coupon');
//Var on date copiryght
let date = new Date();
let year = date.getFullYear();

footerPage.innerHTML = `<span>Copyright © ${year} : <a href="https://www.develhope.co/it/sign-up/">develhope.co</a></span>`;

//Add event to button coupon:

item.addEventListener("click", () => {
  alert('Coupon aggiunto!')
});