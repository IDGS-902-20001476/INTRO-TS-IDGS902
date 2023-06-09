//Herencia de clases 
class Persona5 {
    protected nombre: string;
    protected edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir() {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad: ${this.edad}`)
    }
}

//Aqui se hereda de la clase Persona4 y se le agrega el atributo sueldo
class Empleado extends Persona5 {
    private sueldo: number;
    constructor(nom: string, edad: number, sueldo: number) {
        super(nom, edad);
        this.sueldo = sueldo;
    }
    imprimir() {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`)
    }   
}

let empleado1: Empleado;
empleado1 = new Empleado('Adriana', 21, 5000); 
empleado1.imprimir();