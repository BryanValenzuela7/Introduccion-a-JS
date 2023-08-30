/**
 * Tipos de variables
 */
//VAR ---> es una variable de asignacion de dato
//const ---> Es una variable que no va a mutar de valor nativo 
//let ---> No te deja utilizar la variable antes de inicializarla como el VAR

//Tipos de dato number
var entero = 12 // -2,147,483,648 al 2,147,483,648
var long = 98789098765 // 64-bit del -9,223,372,036,854,775,808 al 9,223,372,036,854,775,808
var flotante = 6.2 //32 bits
var double = 252342352352.54 // 64 bits

console.log(typeof entero)
console.log(typeof long)
console.log(typeof flotante)
console.log(typeof double)

//Boolean
var boleano = true
var boleano2 = false
console.log(typeof boleano, typeof boleano2)

//
var nan_ejemplo = 0/0
console.log(nan_ejemplo)
var not_a_number = NaN
console.log(typeof not_a_number)

//undefined
var notDefined
console.log(typeof notDefined)

//string
var string = '1'
var string2 = '2'
console.log(typeof string)
console.log(typeof string2)
console.log(string + string2)

