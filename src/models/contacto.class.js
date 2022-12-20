import { CONECTADOS } from "./conectados.enum";

export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = CONECTADOS.CONECTADO;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}