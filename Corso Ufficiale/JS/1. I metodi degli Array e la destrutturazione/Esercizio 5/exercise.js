/*Implementare la funzione ageAverage che, dato un array di persone, calcola l'età media.*/
function calculateAverageAge(persons) {
    let ageAverage = persons.reduce((a, persons) => a + persons.age, 0);

    return ageAverage / persons.length
  }
  
  const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  const average = calculateAverageAge(persons);
  console.log(persons);
  console.log(average);