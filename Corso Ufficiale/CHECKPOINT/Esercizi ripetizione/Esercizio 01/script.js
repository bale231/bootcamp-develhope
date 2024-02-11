//Utilizzo metodo "Math" per selzionare un numero di camera casuale in base al tipo:
let singleRoom = Math.floor(Math.random() * 20);
let doubleRoom = Math.floor(Math.random() * (80 - 21 + 1) + 21);
let suiteRoom = Math.floor(Math.random() * (300 - 81 + 1) + 81);
class Hotel {
    constructor() {
        //Romms from database:
        this.rooms = [
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
                number: suiteRoom,
                type: 'Suite',
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
            }
        ];
        //Reservation Rooms
        this.reservation = [];
    }

    addReserve(customer, checkIn, checkOut, room) {
        let randomId = Math.floor(Math.random() * 100)
        this.reservation.push({
            id: randomId,
            customer,
            checkIn,
            checkOut,
            room
        })
    }

    reservationRoom() {
        this.rooms.filter(room => {
            this.reservation.filter(reserve => {
                if (room.type === reserve.room) {
                    let free = room.state.free = false;
                    let busy = room.state.busy = true;
                    let reserved = room.state.reserved = true;
                    return free, busy, reserved
                }
            })
        })
    }

    checkReservation() {
        this.rooms.filter(room => {
            if (room.state.free === false) {
                console.log(`La camera ${room.type} al numero ${room.number} è stata prenotata`);
            } else {
                console.log(`Camera ${room.type} al numero ${room.number} ancora disponibile`);
            }
        })
    }
}

let hotel = new Hotel();

//Camere selezionate:
hotel.addReserve('Luigi Balestrucci', '09/10/2024', '12/10/2024', 'Singola');
hotel.addReserve('Francesco Foti', '15/10/2024', '17/10/2024', 'Doppia');
hotel.addReserve('Daniele De Lise', '20/10/2024', '24/10/2024', 'Doppia');
hotel.addReserve('Francesco Balleri', '26/10/2024', '31/10/2024', 'Doppia');
console.log("Prenotazioni:", hotel.reservation);

hotel.reservationRoom()

hotel.checkReservation()