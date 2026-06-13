export type Prioridad = 'alto' | 'medio' | 'bajo';
export type Estado = 'abierto' | 'en progreso' | 'cerrado';

export class Ticket{
    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public prioridad: Prioridad,
        public estado: Estado,
        public fechaCreacion: Date,
        public reportadoPor: string,
        public laboratorio: string
    ){}
}
