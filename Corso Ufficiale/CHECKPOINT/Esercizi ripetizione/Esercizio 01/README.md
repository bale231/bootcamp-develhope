Devi sviluppare un'applicazione in JavaScript che simuli la gestione delle prenotazioni per un hotel.
Ecco cosa dovrebbe fare l'applicazione:

Gestione delle camere:

Definire un oggetto Room che rappresenta una camera dell'hotel. Ogni camera deve avere un numero, un tipo (singola, doppia, suite), 
e uno stato (libera, prenotata, occupata).
Gestione delle prenotazioni:

Definire un oggetto Reservation che rappresenta una prenotazione di una camera dell'hotel. Ogni prenotazione deve avere un id, un cliente,
una data di check-in, una data di check-out e una camera associata.
Definire una funzione makeReservation che accetta come parametri il nome del cliente, le date di check-in e check-out e il tipo di camera 
richiesto. La funzione deve trovare una camera disponibile del tipo richiesto per le date specificate, creare una nuova prenotazione e 
aggiornare lo stato della camera in "prenotata".
Definire una funzione getReservationsByDate che accetta come parametro una data e restituisce un array contenente tutte le prenotazioni 
per quella data.
Gestione delle disponibilità:

Definire una funzione checkAvailability che accetta come parametri le date di check-in e check-out e il tipo di camera richiesto.
 La funzione deve restituire true se c'è almeno una camera disponibile del tipo richiesto per le date specificate, 
 altrimenti restituire false.
Simulazione temporizzata:

Utilizzare setTimeout per simulare la pulizia delle camere e il cambio di stato da "occupata" a "libera" ogni 24 ore.
Utilizzare setInterval per simulare l'aggiornamento della disponibilità delle camere ogni 5 secondi.
Assicurati di gestire eventuali errori utilizzando try/catch e di includere commenti nel codice per spiegare le diverse parti. 