import * as readline from 'readline';
import { tickets } from './data/ticketsDB.js';
import { ticketsService } from './services/TicketsService.js';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pregunta(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
}
async function mostrarMenu() {
    console.log('Sistema de Tickets \n1. Crear Ticket \n2. Listar Tickets \n3. Actualizar Estado de Ticket \n4. Salir');
    const opcion = await pregunta('Elige una de las opciones:');
    switch (opcion) {
        case '1':
            await crearTicketXD();
            break;
        case '2':
            mostrarTickets();
            break;
        case '3':
            console.log('no implementada');
            break;
        case '4':
            console.log('adios');
            rl.close();
            return;
        default:
            console.log('Opción no válida, por favor revise.');
    }
    mostrarMenu();
}
async function crearTicketXD() {
    console.log('Nuevo ticket por crear');
    const titulo = await pregunta('Título: ');
    const descripcion = await pregunta('Descripción: ');
    const reportadoPor = await pregunta('Reportado por: ');
    const prioridadInput = await pregunta('Prioridad (bajo/medio/alto): ');
    const laboratorio = await pregunta('Laboratorio: ');
    let prioridad = 'bajo';
    if (prioridadInput === 'medio')
        prioridad = 'medio';
    else if (prioridadInput === 'alto')
        prioridad = 'alto';
    const nuevoTicket = ticketsService.crearTicket({
        titulo,
        descripcion,
        reportadoPor,
        prioridad,
        laboratorio
    });
    console.log(`Ticket creado: ${nuevoTicket.id}`);
}
function mostrarTickets() {
    console.log('\n---:3 Tickets ---');
    tickets.forEach(t => {
        console.log(`
            ID: ${t.id}
            Título: ${t.titulo}
            Descripción: ${t.descripcion}
            Reportado por: ${t.reportadoPor}
            Prioridad: ${t.prioridad}
            Estado: ${t.estado}
            Fecha: ${t.fechaCreacion.toLocaleString()}
            Laboratorio: ${t.laboratorio}`);
    });
}
mostrarMenu();
//# sourceMappingURL=index.js.map