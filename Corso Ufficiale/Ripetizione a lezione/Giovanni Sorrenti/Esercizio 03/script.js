/*
 Gestione Utenti
 Descrizione: Crea un'applicazione di gestione utenti con funzioni di aggiunta, rimozione e visualizzazione degli utenti.
 Utilizza metodi degli array, template strings, destrutturazione e rest parameter.
 */

// Lista degli utenti
let utenti = [];
let addButton = true


// Funzione per aggiungere un nuovo utente
function aggiungiUtente(nome, eta, id) {
        utenti.push({name: nome, age: eta, identificativo: id}) 
}

// Funzione per rimuovere un utente
function rimuoviUtente(nick, eta, id) {
   let removedUser = {name: nick, age: eta, identificativo: id};
   utenti = utenti.filter(user => user.name !== removedUser.name || user.age !== removedUser.age && user.identificativo !== removedUser.identificativo);
   return utenti
    
}

/* console.log("Utenti prima della rimozione", utenti)
rimuoviUtente("Alice");
console.log("Utenti dopo la rimozione", utenti)  */

// Funzione per visualizzare la lista degli utenti
function visualizzaUtenti(arr) {
return arr
}

// Funzione principale
function gestisciUtenti() {
   //1)console log della stringa
    console.log("Aggiunta utenti in corso...");
    //2)aggiunta degli utenti
    setTimeout(() => 
        aggiungiUtente("Alice", 28, "tkf8sl"),
        aggiungiUtente("Alice", 26, "tasdd9"),
        aggiungiUtente("Maurizio", 33,"lsc9fen"),
        aggiungiUtente("Martina", 34, "19nd7c"), 1000)
    //3)console log della stringa e dell'array utenti
    setTimeout(() => console.log("Lista utenti aggiornata; ", utenti), 2000);
    //4)console log della stringa
    setTimeout(()=> console.log("Rimozione dell'utente in corso..."), 3000);
    //5)rimozione utenti
    setTimeout(() => rimuoviUtente("Alice", 26, "tasdd9"), 4000);
    //6 console log stringa
    setTimeout(() => console.log("Rimozione utente completata. Lista utenti aggiornata: ", utenti), 5000);
}

// Esegui la funzione principale
gestisciUtenti();
