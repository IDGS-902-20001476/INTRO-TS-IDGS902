class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
             return null;
    }

}

class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
             return null;
    }

}
//enteros
let pila1=new PilaEnteros();
pila1.insertar(2)
pila1.insertar(21)
pila1.insertar(23)
console.log(pila1.extraer());
//cadenas
let pila2=new PilaString();
pila2.insertar('22')
pila2.insertar('33')
pila2.insertar('13')
console.log(pila2.extraer());

// clase generica
class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
             return null;
    }

}

let pila3=new PilaGenerica<number>();
pila3.insertar(2)
pila3.insertar(21)
pila3.insertar(23)
console.log(pila3.extraer());
//cadenas
let pila4=new PilaGenerica<String>();
pila4.insertar('22')
pila4.insertar('33')
pila4.insertar('13')
console.log(pila4.extraer());