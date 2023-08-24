/**
 * Objetos, se inician con { } y para JS son objetos
 * Sintaxis: key:value
 */
var objeto = {}
console.log(typeof objeto)

var bryan = {
    nombre: 'Bryan Valenzuela',
    edad: 22,
    genero: 'masculino',
    carrera: 'ISC',
    semestre: 11
}
//Concatenacion basica
console.log("Hola " + bryan.nombre + " Bienvenido al curso del semestre " + bryan.semestre)

//Template string
console.log(`
Hola ${bryan.nombre},
bienvenido al curso del semestre ${bryan.semestre},
espero que te lo pases genial aprendiendo a programar`)