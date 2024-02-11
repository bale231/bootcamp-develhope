let singleRoom = Math.floor(Math.random() * 20);
let doubleRoom = Math.floor(Math.random() * (80 - 21 + 1) + 21);
let suiteRoom = Math.floor(Math.random() * (300 - 81 + 1) + 81);
let randomId = Math.floor(Math.random() * 100)


let room = [
    {
        number: singleRoom,
        type: 'Singola',
        state: {
            free: true,
            busy: false,
            reserved: false
        }
    },
    {
        number: doubleRoom,
        type: 'Doppia',
        state: {
            free: true,
            busy: false,
            reserved: false
        }
    },
    {
        number: suiteRoom,
        type: 'Suite',
        state: {
            free: true,
            busy: false,
            reserved: false
        }
    },

];


let reservation = {
    id: randomId,
    client: [],
    checkIn: [],
    checkOut: []
};

let newReservation = [];

function makeReservation(client, checkIn, checkOut, typeRoom) {
    
}