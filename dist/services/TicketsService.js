import { tickets } from '../data/ticketsDB.js';
import { generaID } from '../utils/helpers.js';
export class ticketsService {
    static crearTicket(datos) {
        const nuevoTicket = {
            id: generaID(), ...datos,
            estado: 'abierto',
            fechaCreacion: new Date()
        };
        tickets.push(nuevoTicket);
        return nuevoTicket;
    }
    static obtenerTickets() {
        return tickets;
    }
    static actualizarEstado(id) {
        return tickets.find(ticket => ticket.id === id);
    }
}
//# sourceMappingURL=TicketsService.js.map