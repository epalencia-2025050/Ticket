import type {Ticket, Prioridad} from '../models/Ticket.js';
import {tickets} from '../data/ticketsDB.js';
import {generaID} from '../utils/helpers.js';

export class ticketsService{
    static crearTicket(datos: Omit<Ticket, 'id' | 'estado' | 'fechaCreacion'>): Ticket{
        const nuevoTicket: Ticket = {
            id: generaID(),...datos,
            estado: 'abierto',
            fechaCreacion: new Date()
        };
        tickets.push(nuevoTicket);
        return nuevoTicket;
        }

        static obtenerTickets(): Ticket[]{
            return tickets;
        }

        static actualizarEstado(id: number): Ticket | undefined{
            return tickets.find(ticket => ticket.id === id);
        }
    }