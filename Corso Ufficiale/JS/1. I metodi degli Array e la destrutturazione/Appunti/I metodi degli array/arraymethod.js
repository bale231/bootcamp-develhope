/***************************** forEach METHOD ************************/

// const bat = ['Trani', 'Barletta', 'Andria'];

// function districtOfPuglia(bat){
//     console.log(bat);
// }

// bat.forEach(districtOfPuglia);

/**************** map METHOD *****************/ 
/*****************
const numbers = [1, 2, 3, 4];

const doubleNumbers = numbers.map(double => double * 2);

console.log(doubleNumbers)
******************/

/*******************
const users = [
    {
        name: 'Andrea',
        surname: 'Salvemini',
        age: 23
    },

    {
        name: 'Anna',
        surname: 'Gadaleta',
        age: 23
    },

    {
        name: 'Marco',
        surname: 'Di Lernia',
        age: 22
    }
];

const userNames = users.map(age => age.age);

console.log(userNames)
*********************/

// const users = [
//     {
//         name: 'Andrea',
//         surname: 'Salvemini',
//         age: 23
//     },

//     {
//         name: 'Anna',
//         surname: 'Gadaleta',
//         age: 23
//     },

//     {
//         name: 'Marco',
//         surname: 'Di Lernia',
//         age: 22
//     }
// ];

// const userNames = users.map(ages => ages.age + 1);

// console.log(userNames)

/********************************** find METHOD ************************************/
// const users = [
//         {
//             name: 'Andrea',
//             surname: 'Salvemini',
//             age: 23
//         },
    
//         {
//             name: 'Anna',
//             surname: 'Gadaleta',
//              age: 23
//         },
    
//         {
//             name: 'Marco',
//             surname: 'Di Lernia',
//             age: 22
//         }
// ];
    
//  const userAges = users.find(ages => ages.age < 23);
//  const userNames = users.find(names => names.name === 'Anna')
    
//  console.log(userAges);
//  console.log(userNames)

/*********************************** filter METHOD ***********************************/
// const users = [
//     {
//         name: 'Andrea',
//         surname: 'Salvemini',
//         age: 23
//     },

//     {
//         name: 'Anna',
//         surname: 'Gadaleta',
//          age: 23
//     },

//     {
//         name: 'Anna',
//         surname: 'Di Lernia',
//         age: 16
//     }
// ];

// const myUsers = users.filter(user => user.age >= 18 /*&& user.name === 'Anna'*/);



// console.log(myUsers)

/********************************* reduce METHOD **************************/

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((a, number) => a + number, 0)

// const users = [
//     {
//         name: 'Andrea',
//         surname: 'Salvemini',
//         age: 23
//     },

//     {
//         name: 'Anna',
//         surname: 'Gadaleta',
//          age: 23
//     },

//     {
//         name: 'Marco',
//         surname: 'Di Lernia',
//         age: 22
//     }
// ];

// const sumArrayObject = users.reduce((a, user) => a + user.age, 0);
// const avg = sumArrayObject / users.length;

// console.log(sum);
// console.log(avg)