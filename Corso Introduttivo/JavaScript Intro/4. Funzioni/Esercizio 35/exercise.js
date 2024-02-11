function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }

}

canPlay();

/* Prima dava errore perchè non possiamo fare il console.log di una variabile scope all'infuori del suo scope, ovvero, la variabile "personName" si trova dentro l'if statement quindi di conseguenza non si può loggare fuori dall'if.*/
