import { Ticket } from '../models/Ticket.js';

export const tickets: Ticket[] = [
    new Ticket(1, 'Error en login', 'No puedo iniciar sesión con mis credenciales', 'alto', 'abierto', new Date('2024-01-01'), 'Juan Pérez', 'Lab A'),
    new Ticket(2, 'Página no carga', 'La página principal no se carga correctamente', 'medio', 'en progreso', new Date('2024-01-02'), 'María García', 'Lab B'),
    new Ticket(3, 'Error en formulario', 'El formulario de contacto no envía los datos', 'bajo', 'cerrado', new Date('2024-01-03'), 'Pedro López', 'Lab C')
];