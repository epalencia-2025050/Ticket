import type { Ticket } from '../models/Ticket.js';
export declare class ticketsService {
    static crearTicket(datos: Omit<Ticket, 'id' | 'estado' | 'fechaCreacion'>): Ticket;
    static obtenerTickets(): Ticket[];
    static actualizarEstado(id: number): Ticket | undefined;
}
//# sourceMappingURL=TicketsService.d.ts.map