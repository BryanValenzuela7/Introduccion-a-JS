//number
//string
//boolean
//arrays
//objetos
/**
 * BUSCAR SPREAD OPERATOR
 */
const frutas = ['Kiwi','Uva','Coco channel']
//for(let i=0; i <array.length; i++){
//    console.log(array[i])
//}

//for(let fruta in array){
//    console.log(array[fruta])
//}

// for(let fruta of array){
// console.log(fruta)
// }
//function hola(){}
// const hola () => {}  || Cambia la estructuracion de la funcion: el > signfica function 
// let nuevasFrutas =frutas.map(fruta =>{
//     return fruta
// })
// nuevasFrutas.push('Brocoli')
// console.log(frutas)
// console.log(nuevasFrutas)

const edades = []
for(let i = 0; i<1000; i++){
    const numeroAleatorio = Math.floor(Math.random() * (65-10+1)) + 10
    edades.push(numeroAleatorio)
}
console.log(edades)

const pediatricos = edades.filter(edad => edad <18)
console.log(pediatricos)
// const calificaciones = [10,9,8,7,6,5]
// const aprobados = calificaciones.filter(calificacion => calificacion>7)
// console.log(aprobados)