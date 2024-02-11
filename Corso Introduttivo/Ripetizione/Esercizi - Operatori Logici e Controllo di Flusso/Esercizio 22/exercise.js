let primitive = 450;

// if(typeof primitive === 'number'){
//     console.log('This variable is number.');
// }else{
//     console.log('This variable undefined');
// }

// Dichiarazione della variabile
let variabile;

// Assegnazione del valore
variabile = 45810;

// Controllo del tipo
switch (typeof variabile) {
  case "string":
    console.log("Il tipo della variabile è stringa");
    break;
  case "number":
    console.log("Il tipo della variabile è numero");
    break;
  case "boolean":
    console.log("Il tipo della variabile è booleano");
    break;
  default:
    console.log("Il tipo della variabile è sconosciuto");
}