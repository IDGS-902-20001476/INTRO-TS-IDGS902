//Funciones

function sumar(a:number,b:number):number{
    return a+b
}

const sumaFlecha=(a:number, b:number): number=> {
    return a+b
}
const resultado=sumar(28.15,21.1)

function multiplicar (n1:number, num2?:number, base:number=2):number{
    return n1*base;
}
const result2= multiplicar(5,0,10)
const flecha=sumaFlecha(2,8)

// interface Mascota{
//     mascota:string;
//     edad:number;
//     x:number;
// }

// function calculaEdad(mascota:Mascota, x=number):void{
//     mascota.edad+=x;
//     console.log(mascota);
// }
interface Persona2{
    nombre:string;
    edad:number;
    
    grupo:()=>void;
}

function UTL(alumno:Persona2,cuatrimestre:number):void{
    alumno.edad=21;
    console.log(alumno);
}
console.log(UTL);

const NuevoAlumno:Persona2={
    nombre:'Adriana',
    edad:21,
    grupo(){
        console.log('IDGS901',this.edad);
    }
}
UTL(NuevoAlumno,8);

//function anonima 
const funcSumar=function(n1:number,n2:number):number{
    return n1+n2;
}
console.log(funcSumar(5,5));

//funcion con parametros opcionales
function calcular(n1:number,n2:number,n3?:number):number{
    if(n3)
        return n1+n2+n3;
    else
        return n1+n2;
    }
    console.log(calcular(5,5));
    console.log(calcular(5,5,5));


// parametros REST en funciones
function calcular2(...valores:number[]):number{
    let suma=0;
   for(let x=0; x<valores.length;x++)
       suma+=valores[x];
    return suma;
}

console.log(calcular2(10,2,3,4))
console.log(calcular2(2,3))