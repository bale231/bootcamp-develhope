//obj persons;
let persons = [
    {
        id: 1,
        firstName: 'Mario',
        lastName: 'Rossi',
        age: 25
    },
    {
        id: 2,
        firstName: 'Maria',
        lastName: 'Verdi',
        age: 32
    },
    {
        id: 3,
        firstName: 'Giovanni',
        lastName: 'Rossi',
        age: 35
    }
];

//obj jobs;
const jobs = [
    {
        id: 1,
        jobTitle: 'CEO'
    },
    {
        id: 2,
        jobTitle: 'Project Manager'
    },
    {
        id: 3,
        jobTitle: 'Developer'
    }
];

// La persona che ha come identificativo l'id passato come parametro;
function fetchPersonById(id){
    return promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = persons.find(person => person.id == id);
            if (person){
                return resolve(person)
            } else {
                return reject(new Error(`No person with id ${id}`))
            }
        },3000)
    })
};

// Il tipo di lavoro che ha come identificativo l'id passato come parametro;
function fetchJobById(id){
    return promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            const job = jobs.find(job => job.id == id);
            if (job){
                return resolve(job)
            } else {
          return reject(new Error(`No job with id ${id}`))
      }
  },2000)
  })
}

// Implementare il codice necessario che si occupa di stampare in 
// console la persona e il tipo di lavoro trovato. N.B: la stampa dei risultati 
// deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.
Promise.all([fetchPersonById(1), fetchJobById(1)]) 
  .then((data) => {
      console.log(data);
  }).catch((error) => {
      console.error(error);
  });