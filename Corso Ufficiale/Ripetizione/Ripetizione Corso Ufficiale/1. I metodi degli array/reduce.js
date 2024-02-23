const numbers = [1, 2, 3, 4, 5];

//const sum = numbers.reduce((a, number) => a + number, 0);

const users = [
    {
        name: 'Luigi',
        surname: 'Balestrucci',
        age: 23,
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

const sum = users.reduce((a, user) => a + user.age, 0)

const avg = sum / users.length;

console.log(avg)