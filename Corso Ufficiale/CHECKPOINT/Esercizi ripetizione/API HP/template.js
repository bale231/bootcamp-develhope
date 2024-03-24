const btn = document.querySelector('button')
const container = document.querySelector('.container')
const filters = Array.from(document.querySelectorAll('.filter-btn'))
console.log(filters);
/* btn.addEventListener('click', async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products ');
    const data = await res.json();
    console.log(data);

    data.forEach(prod => {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('card');
      const title = document.createElement('h3');
      const price = document.createElement('span');
      const img = document.createElement('img');

      title.textContent = prod.title;
      price.textContent = prod.price;
      img.setAttribute('src', prod.image)

      cardContainer.append(title, img, price)

      container.appendChild(cardContainer)
    });
  } catch (error) {
    console.error(error);
  }
}) */

function render(arr) {
    arr.forEach(prod => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        cardContainer.innerHTML = `
    <h3>${prod.title}</h3>
    <img src=${prod.image} alt=${prod.title}/>
    <p>${prod.category}</p>
    <span>${prod.price}$</span>
    `

        container.appendChild(cardContainer)
    });
}

window.addEventListener('load', async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products ');
        const data = await res.json();
        console.log(data);

        render(data)
        filters.forEach(btnFilter => {
            btnFilter.addEventListener('click', () => {
                console.log(btnFilter.name);
                if (btnFilter.name === 'all') {
                    container.innerHTML = ''
                    render(data)
                }

                if (btnFilter.name === 'jewelery') {
                    container.innerHTML = ''
                    const jewels = data.filter(item => item.category === 'jewelery')
                    render(jewels)
                }

                if (btnFilter.name === 'electronics') {
                    container.innerHTML = ''
                    const electronics = data.filter(item => item.category === 'electronics')
                    render(electronics)
                }
            })
        })
    } catch (error) {
        console.error(error);
    }