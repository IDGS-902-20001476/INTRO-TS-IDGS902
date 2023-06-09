

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

//Generar variable

let nombre:string="RCR"
//nombre=35

let datos:string |number=95
datos="IDGS902"

let vivo:boolean=true

let vector:number[]=[1,2,3,4];
vector[2]=8
vector.push(11)
for(let i=0;i<vector.length;i++){
    console.log(vector[i])
}
//o también puede ser...

for(let elemento of vector){
    console.log(elemento)
}

