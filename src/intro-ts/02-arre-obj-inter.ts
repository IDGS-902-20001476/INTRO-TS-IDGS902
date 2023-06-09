//objetos,arreglos e interfaces
// any permite definir varios tipos de dats en uno
let mascotas=['perro','gato','100','true']
//let tem:(boolean|number|string)[]=['aaaa',100,true]
let nombres:string[]=['Juan','Pedro','Mario']

let vector1:Array<number>=[1,2,3,4,5]
vector1.push(10)
vector1[1]=9
for(let tem of vector1){
    console.log(tem)
}

//..................
let tem:(number|string)[]=[]
tem.push('maria')
tem.push(100)

///.....................

interface Persona{
    nombre:string; //? significa que es opcional
    grupo:string;
    edad:number;
    materias:string[];
    inscrito?:boolean;
}
const alumno:Persona={
    nombre:'Adriana',
    grupo:'IDGS902',
    edad:21,
    materias:['Español','Matematicas','Hisotria'],
    inscrito:true
}
console.table(alumno)
