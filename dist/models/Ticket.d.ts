export type Prioridad = 'alto' | 'medio' | 'bajo';
export type Estado = 'abierto' | 'en progreso' | 'cerrado';
export declare class Ticket {
    id: number;
    titulo: string;
    descripcion: string;
    prioridad: Prioridad;
    estado: Estado;
    fechaCreacion: Date;
    reportadoPor: string;
    laboratorio: string;
    constructor(id: number, titulo: string, descripcion: string, prioridad: Prioridad, estado: Estado, fechaCreacion: Date, reportadoPor: string, laboratorio: string);
}
//# sourceMappingURL=Ticket.d.ts.map