/* 
creiamo una funzione fizzBuzz, questa funzione deve ciclare i numeri da 1 a 100, 
se il numero su cui sta ciclando è multiplo di 3 viene stampata in console la stringa fizz, 
se è multiplo di 5 stampa in console la stringa buzz, se è multiplo di entrambi allora stampa fizzbuzz
*/
// const str1 = 'Fizz';
// const str2 = 'Buzz';
// const str3 = 'FizzBuzz';

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log(`Number ${i} it's ${str1}`);
//         } else if (i % 3 == 0) {
//             console.log(`Number ${i} it's ${str2}`);
//         } else if (i % 5 == 0) {
//             console.log(`Number ${i} it's ${str3}`);
//         } else {
//             console.log(`Number is ${i}`);
//         }
//     }
// }

// fizzBuzz();

/* First method of word is palindromo */
const word = 'otto';

function isPalindrome(string){
    const newString = string.split('').reverse().join('');
    if (string === newString) {
        console.log(`"${string}" is palindrome.`);
    } else {
        console.log(`"${string}" isn't palindrome.`);
    }
}

isPalindrome(word);

/* First method of word is palindromo */
function checkIfPalindrome (str) {
    for (i = 0; i < str.length; i++) {
        if (str.toLowerCase()[i] === str.toLowerCase()[str.length-1-i]) {
            return true;
        } else {
            return false;
        }
    }
}

checkIfPalindrome(word)