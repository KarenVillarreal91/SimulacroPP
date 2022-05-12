export class Actor {
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    pais:string;

    constructor(nombre:string, apellido:string, edad:number, email:string, pais:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.pais = pais;
    }
}
