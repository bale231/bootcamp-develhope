const input = document.querySelector('input');
const btnSearch = document.querySelector('.golden-button');
const btnClear = document.getElementById('clear-card');
const form = document.getElementById('cocktail-bar');
const containerCocktail = document.querySelector('.card');
const img = document.querySelector('img');
const titleCard = document.querySelector('h4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    async function fetchCocktails() {
        const drink = input.value;
        try {
            const fetchURL = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
            const fetchDrink = await fetchURL.json();
            console.log(fetchDrink.drinks[0]);
            img.setAttribute('src', `${fetchDrink.drinks[0].strDrinkThumb}`);
            img.setAttribute('alt', `${fetchDrink.drinks[0].strDrink}`);
            titleCard.innerText = `${fetchDrink.drinks[0].strDrink}`;

            btnClear.addEventListener('click', () => {
                img.setAttribute("src", "");
                img.setAttribute("alt", "");
                titleCard.innerText = "";
            })
        } catch (error) {
            alert(error, 'Cocktail non riconosciuto.');
        }
    }

    fetchCocktails();
})

