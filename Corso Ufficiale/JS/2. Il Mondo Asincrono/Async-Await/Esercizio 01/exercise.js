/*La funzione caricamentoDati simula il caricamento di dati asincroni con un ritardo di 2 secondi!

Implementa la funzioneottieniDatiutilizzando await 
per attendere il caricamento dei dati, quindi visualizza i dati ottenuti in console.*/
function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

// Implementa la funzione asincrona "ottieniDati":
async function ottieniDati() {
  const buffering = await caricamentoDati();
  console.log(buffering);
}

ottieniDati();