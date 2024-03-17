const btn = document.querySelector('#btn');
const input = document.querySelector('#search')
const container = document.querySelector('.container')
const prodottoPreferito = document.querySelector('#prodottoPreferito')

async function fetchAPI() {
    const url = await fetch('https://fakestoreapi.com/products/')
    const data = await url.json()
    console.log(data)
    data.forEach(element => {
        const nameProduct = element.title
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('h3')
        title.textContent = nameProduct
        const imageProduct = element.image
        const divImage = document.createElement('div')
        divImage.classList.add('card__img')
        divImage.style.backgroundImage = `url(${imageProduct})`;

        card.append(title, divImage)
        container.appendChild(card)
        prodottoPreferito.textContent = nameProduct;
    });
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const prodottoCercato = input.value
    if (prodottoCercato === nameProduct) {
        fetchAPI()
        container.innerHTML = "";
    } else {
        alert('Prodotto inesistente!!')
    }
})

