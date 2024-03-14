//Var che prendono gli oggetti con la classe descritta:
let item = document.querySelector('.toggle-single');
let card = document.querySelector('.card');
let label = document.querySelector('input');

//Evento che al click mi aggiunge una nuova classe:
item.addEventListener("click", function() {
  card.classList.toggle('toggle-active');
});

//Evento che al click mi rende il bottone più chiaro:
label.addEventListener("click", function() {
  item.classList.toggle('toggle-activated');
});
