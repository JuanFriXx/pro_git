//Imprime por pantalla "Hola Mundo"
console.log("Hola Mundo")

//Crea la funcion sumar con dos datos de tipo "number"
function sumar (a: number, b: number) {
    //Devuelve la suma de a y b
    return a + b
}
//Imprime por panatalla la funcion "sumar" con los datos 4 y 5
console.log(sumar(3, 4))

//Igual que la funcion "sumar" pero con una resta y escrito de otra forma
let restar = (a: number, b: number) => a - b
console.log(restar(3, 4))


var multipilcarRaro = function (a: any, b: any) {
    let r = 4;
    let r2 = a * b + r;
    return r2;
}