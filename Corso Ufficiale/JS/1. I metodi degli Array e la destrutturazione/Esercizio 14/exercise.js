/*Crea una funzione chiamata somma che accetta un numero qualsiasi 
di argomenti e restituisce la somma di tali argomenti.
Utilizza il parametro rest per raccogliere gli argomenti. 
-Stampa in console l'output della funzione somma.*/

function somma (...rest){
    return rest.reduce((a, sum) => sum + a, 0)
};

console.log(somma(1, 5, 33, 6, 9, 10, 11))