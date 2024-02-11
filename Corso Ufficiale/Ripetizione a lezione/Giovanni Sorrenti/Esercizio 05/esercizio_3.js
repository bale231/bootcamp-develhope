/********
 Esercizio 4: Simulazione di un App Todo List
 Crea una classe TodoList che consenta di aggiungere, rimuovere e visualizzare attività.
 Implementa anche la funzionalità di segnare un'attività come completata.
*******/

//Classe per aggiungere, rimuovere e visualizzare attività:
class TodoList {
    constructor() {
        this.attivita = []
    }

    aggiungiAttivita(descrizione) {
        this.attivita.push({
            descrizione,
            completata: false,
        })
    }

    segnaCompletata(index) {
        return this.attivita[index].completata = true;
    }

    rimuoviAttivita(index) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let remove = this.attivita.splice(index, 1)
                resolve(remove)
            }, 2000);
        })
    }

    visualizzaAttivita() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let view = this.attivita
                resolve(view)
            }, 2000);
        })
    }

}

//Variabile che mi permette di creare un istanza della classe:
let todoList = new TodoList();
console.log('Aggiungi attività da svolgere.');

//Aggiungo attività:
todoList.aggiungiAttivita('Comprare il latte.');
todoList.aggiungiAttivita('Andare al supermercato.');
todoList.aggiungiAttivita('Andare in live.');
//Stampo la lista:
console.log("Attività aggiunte:", todoList.attivita);

///Segno l'attività completata impostandola su "true":
todoList.segnaCompletata(0);

async function delayTime() {
    //Rimuovo l'attività completata:
    let rimuovo = await todoList.rimuoviAttivita(0);
    console.log("Attività completata, rimozione in corso di:", rimuovo);

    //Infine visualizzo le attività rimanenti:
    let visualizza = await todoList.visualizzaAttivita()
    console.log("Lista attività rimanenti:", visualizza);
}

delayTime();