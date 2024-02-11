let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

console.log(Number(hello)); //Il risultato è 'NaN' 
                            //perchè una stringa non può essere 
                            //convertita in 'number' ma solo in 'boolean'
console.log(Boolean(age));
console.log(String(isGraduated))