let item = document.querySelector('.toggle-single');
let card = document.querySelector('.card')
item.addEventListener("click", function() {
  card.classList.toggle('toggle-active');
});