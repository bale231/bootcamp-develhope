/*In questo esercizio dato un array di studenti:
Utilizza forEach per stampare i nomi degli studenti.
Utilizza find per trovare uno studente con un voto superiore a 90.
Utilizza reduce per calcolare la media dei voti degli studenti.
Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
Utilizza filter per trovare gli studenti con voti superiori a 85.*/

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

console.log("Nomi studenti:");
studenti.forEach(name => {
        console.log(name.nome);
});

const studentMajor = studenti.find(student => student.voto > 89);
console.log("Studente migliore:");
console.log(studentMajor);

const sumVote = studenti.reduce((a, vote) => a + vote.voto, 0 );
const averageVote = sumVote / studenti.length;

console.log("Somma dei Voti:");
console.log(sumVote);
console.log("Media Voti:");
console.log(averageVote);

const newArray = studenti.map(name => name.nome.toUpperCase());

console.log("Nomi studenti in MAIUSCOLO:")
console.log(newArray);

const studentsSuperior = studenti.filter(upper => upper.voto >= 85)

console.log("Studenti con voto superiore a 85:");
console.log(studentsSuperior);