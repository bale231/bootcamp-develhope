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

const myUser = users.filter(user => user.name === 'Francesco');
console.log(myUser)