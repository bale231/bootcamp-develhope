const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);


const users = [
    {
        name: 'Luigi',
        surname: 'Balestrucci',
        age: '23',
        address: {
            city: 'Trani',
            district: 'BAT',
            cap: 76125
        }
    },
    {
        name: 'Francesco',
        surname: 'Conversano',
        age: 24,
        address: {
            city: 'Andria',
            district: 'BAT',
            cap: 76123
        }
    },
    {
        name: 'Marco',
        surname: 'Di Lernia',
        age: 22,
        address: {
            city: 'Trani',
            district: 'BAT',
            cap: 76125
        }
    }
];

//const userName = users.map(user => user.address);
const userName = users.map(user => {
    user.age = user.age + 1;

    return user
});

console.log(userName)