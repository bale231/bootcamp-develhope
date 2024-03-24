const btn = document.querySelector('#btn');
const input = document.querySelector('#search');
const containerCard = document.querySelector('.container-card');


async function searchStudent() {
    const fetchURL = await fetch('https://hp-api.onrender.com/api/characters/students');
    const data = await fetchURL.json();
    containerCard.innerHTML = ""; // Clear the container before adding new cards
    
    let studentFound = false; // Flag to track if a student is found
  
    data.forEach(student => {
      if (input.value === student.name) {
        studentFound = true; // Set flag if a student is found
        localStorage.setItem('nameStudent', student.name);
        localStorage.setItem('houseStudent', student.house);
        const card = document.createElement('div');
        card.classList.add('card');
            card.innerHTML = `
            <div class="card-img">
              <img src="${student.image}" alt="${student.name}">
            </div>
            <h3>${student.name}</h3>
            <p>
              <strong>House:</strong> ${student.house}
            </p>
          `;

            containerCard.appendChild(card);
            input.value = "";
        }
    });

    if (!studentFound) {
        alert('Babbano lurido mezzosangue'); // Alert only if no student is found
        input.value = '';
    }
}

btn.addEventListener('click', () => {
    searchStudent();
});