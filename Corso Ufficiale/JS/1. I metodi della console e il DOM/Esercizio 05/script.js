//Var to takes a button:
let btn = document.querySelector('.btn');
let h1 = document.querySelector('h1');

function clickToggle(){
    if(btn.innerHTML === "Dark Mode"){
        btn.innerHTML = 'Light Mode';
        h1.innerHTML = 'Light Mode';
    }else{
        btn.innerHTML = 'Dark Mode';
        h1.innerHTML = 'Dark Mode';
    }
}

//Event to chage theme page:
btn.addEventListener("click", function() {
  document.body.classList.toggle('theme');
  clickToggle();
});