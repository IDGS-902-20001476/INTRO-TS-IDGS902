
class Persona3{
    nombre:string='Adriana';
    edad:number=2;
    constructor(nombre:string, edad:number){
        //constructor(nombre:string='', edad:number=3){ para pasar los parametros de una vez
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}

let persona:Persona3;
persona= new Persona3('Adriana', 21)
persona.imprimir();

//Modificadores de acceso

class Dado{
    private valor:number=0;
    public tirar(){
        this.generate();
    }
    private generate(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Valor: ${this.valor}`);
    }

}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

 // clase 2

 class Persona4{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`)
    }
 }

 let persona4: Persona4;
 persona4= new Persona4('Adri', 2)
 persona4.imprimir();
 