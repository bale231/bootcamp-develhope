let team = [
  {
    name: "Francesca",
    surname: "Bonato",
    age: 29,
    city: "Milano",
    hobby: "reading",
    favoriteFood: "sushi",
    favoriteVideoGame: "Skyrim",
    favoriteFilm: "Matrix",
    favoriteBook: "Orgoglio e pregiudizio",
    petName: "",
  },
  {
    name: "Francesco",
    surname: "Balleri",
    age: 29,
    city: "Mantova",
    hobby: "Gaming",
    favoriteFood: "Pizza",
    favoriteVideoGame: "The Binding of Isaac",
    favoriteFilm: "A Clockwork Orange",
    favoriteBook: "Devilman",
    petName: "",
  },
  {
    name: "Francesco",
    surname: "Foti",
    age: 21,
    city: "Brindisi",
    hobby: "bodybuilding",
    favoriteFood: "Lasagna",
    favoriteVideoGame: "Forza Horizon 5",
    favoriteFilm: "trasporter",
    petName: "shila, cane",
    favoriteBook: "",
  },
  {
    name: "Daniele",
    surname: "De Lise",
    age: 22,
    city: "Napoli",
    hobby: "Gaming",
    favoriteFood: "sushi",
    favoriteVideoGame: "Uncharted 4",
    favoriteFilm: "The departed",
    favoriteBook: "La fattoria degli animali",
    petName: "Kira",
  },
  {
    name: "Sergio",
    surname: "Gagliano",
    age: 25,
    city: "Bagheria",
    hobby: "Viaggiare",
    favoriteFood: "Pizza",
    favoriteVideoGame: "The last of us",
    favoriteFilm: "Scarface",
    favoriteBook: "Harry Potter",
    petName: "",
  },
  {
    name: "Giuseppe",
    surname: "Buoncore",
    age: 19,
    city: "Catanzaro",
    hobby: "Videogames",
    favoriteFood: "Morzello",
    favoriteVideoGame: "Red dead redemption 2",
    favoriteFilm: "Fight club",
    favoriteBook: "Fahreneit 451",
    petName: "Luna",
  },
  {
    name: "Luigi",
    surname: "Balestrucci",
    age: 23,
    city: "Trani",
    hobby: "Gaming",
    favoriteFood: "Pizza",
    favoriteVideoGame: "The Last Of Us 1/2",
    favoriteFilm: "Ritorno al Futuro 1/2/3",
    favoriteBook: "",
    petName: "",
  },
];

// Funzione ordine alfabetico FRANCESCO FOTI

function orderedName(array) {
  let order = array.sort((a, b) => {
    if (a.surname < b.surname) {        //confronta le proprietà
      return -1;                        //se il valore finale è -1, allora metti in ordine a < b
    }
  });
  return order;
}

let start = orderedName(team);
console.log("Team ordinato con i cognomi in ordine alfabetico:", start);

// Funzione per ordinare il team in base all'età

function sortAges(arr) {
  const sortedAges = arr.toSorted((a, b) => b.age - a.age);
  console.log("Team ordinato con le età in ordine crescente:", sortedAges);
}

sortAges(team);
//console.log(team);

//TODO: Print who has a pet (name petName).
function usersPets(arr) {
    arr.forEach((element) => {
        if (element.petName !== '') {
            console.log(`${element.name}: ${element.petName}`);
        }
    });
}

usersPets(team);

// Funzione per calcolare l'età media del team.

function calcMiddleAge(array) {
  let totalAge = array.reduce((tot, person) => tot + person.age, 0);
  let middleAge = totalAge / array.length;
  return middleAge;
}

console.log(calcMiddleAge(team));

// Funzione per verificare se ci sono omonimi nel team.

function checkSameName(array) {
  let hasSameName = false;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i && array[i].name === array[j].name) {
        hasSameName = true;
      }
    }
  }

  if (hasSameName) {
    console.log(`Ci sono più persone con lo stesso nome!`);
  } else {
    console.log("Non ci sono persone con lo stesso nome");
  }
}

checkSameName(team);