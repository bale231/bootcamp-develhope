// const title1 = document.querySelector('.one');
// const title2 = document.querySelector('.two');
// const title3 = document.querySelector('.three');
// const title4 = document.querySelector('.four');
const containerCard = document.querySelector('.row');

//Async function to take a API info:
async function fetchData() {
  try {
    //Fetch to url api:
    const response = await fetch('https://ringsdb.com/api/public/cards/');
    const data = await response.json();
    /*  -------------------------------------
    COME FACCIO A FARLO CON FOREACH?
    ----------------------------------------- */
    // data.forEach(card => {
    //   if (card <= 4) {
    //   }
    // });
    //Select single element and create a card to single element:
    for (let i = 0; i < 6; i++) {
      const cards = document.createElement('div');
      console.log(data[i].position);
      cards.setAttribute('class', 'col')
      cards.innerHTML =
        `
              <div class="card h-100">
                <img src="https://ringsdb.com${data[i].imagesrc}" class="card-img-top first" alt="${data[i].name}" />
                <div class="card-body">
                  <h5 class="card-title one">${data[i].name}</h5>
                  <p class="card-text">${data[i].flavor}</p>
                </div>
              </div> 
              `
      containerCard.appendChild(cards);
    }
    // const cardTitle1 = await data[0].name;
    // const cardTitle2 = await data[1].name;
    // const cardTitle3 = await data[2].name;
    // const cardTitle4 = await data[3].name;
    // document.querySelector('.first').src = "https://ringsdb.com" + data[0].imagesrc;
    // document.querySelector('.second').src = "https://ringsdb.com" + data[1].imagesrc;
    // document.querySelector('.third').src = "https://ringsdb.com" + data[2].imagesrc;
    // document.querySelector('.fourth').src = "https://ringsdb.com" + data[3].imagesrc;
    // title1.innerText = cardTitle1;
    // title2.innerText = cardTitle2;
    // title3.innerText = cardTitle3;
    // title4.innerText = cardTitle4;
  } catch (error) {
    console.error(error)
  }
}

fetchData();