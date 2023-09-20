/**
 * Coercion implicita
 */
// var x= 10
// var y='5'
// var resultado = x + y
// console.log(resultado)

// var z = '5'
// z === 5
// console.log(typeof z)

/**
 * Paso x valor y paso x funcion 
 */
var a = 5;

function modificarValor(valor) {
  valor = 10; // Cambiar el valor de 'valor' no afecta a 'a'
}

modificarValor(a);
console.log(a); // 5, 'a' sigue siendo 5
var arreglo = [1, 2, 3];

function modificarArreglo(arr) {
  arr.push(4); // Modificar 'arr' también modifica 'arreglo'
}

modificarArreglo(arreglo);
console.log(arreglo); // [1, 2, 3, 4], 'arreglo' se modificó
