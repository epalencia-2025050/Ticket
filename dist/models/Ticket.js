export class Ticket {
    id;
    titulo;
    descripcion;
    prioridad;
    estado;
    fechaCreacion;
    reportadoPor;
    laboratorio;
    constructor(id, titulo, descripcion, prioridad, estado, fechaCreacion, reportadoPor, laboratorio) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.reportadoPor = reportadoPor;
        this.laboratorio = laboratorio;
    }
}
//# sourceMappingURL=Ticket.js.map