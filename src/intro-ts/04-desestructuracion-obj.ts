//Desestructuracion de objetos y arreglos

interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:20001476,
    nombre:'Mario',
    edad:21,
    correo:'adribr461@gmail.com',
    grupo:{
        grupo: 'idgs902',
        year:2023,
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log( `El año  del grupo es: ${alumno2.grupo.year} `)

const{matricula1,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`La matricula es: ${matricula1}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El grupo es: ${grupo}`)
console.log(`El año de grupo es: ${anio}`)

//desestructuracion de arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[0]}`)
console.log(`grupo 3: ${gps[0]}`)

const[a,,b]=gps;
console.log(`grupo 1: ${a}`)




