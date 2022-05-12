export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    estreno:Date;
    cantPublico:number;
    foto:string;

    constructor(id:number,
        nombre:string,
        tipo:string,
        estreno:Date,
        cantPublico:number,
        foto:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.estreno = estreno;
        this.cantPublico = cantPublico;
        this.foto = foto;
    }
}
