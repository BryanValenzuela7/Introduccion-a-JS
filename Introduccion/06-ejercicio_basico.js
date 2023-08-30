var estudiantes = [
    {
        nombre:'Elian',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre: 'Jorge',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre:'Oscar',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre:'Bryan',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre:'Brandon',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre:'Pedro',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
    {
        nombre:'Carlangas',
        edad: 21,
        semestre: 8,
        carrera: 'ISC'
    },
]
//for in saca los indices
//for(var index in estudiantes){
//    var estudiante = estudiantes[index]
//    console.log(`${estudiante.nombre} ${estudiante.edad} ${estudiante.semestre} ${estudiante.carrera}`)
//}

//for of saca los objetos 1 a 1 
//for(var estudiante of estudiantes){
//    console.log(`${estudiante.nombre} ${estudiante.edad} ${estudiante.semestre} ${estudiante.carrera}`)
//}

var persona = {
    nombre : 'Martha',
    estudiante:{
        carrera: 'Administracion',
        semestre: 6,
        promedio: 8.5,
        materias:[
            'Calculo 1',
            'Administracion de empresas',
            'Gestion de proyectos',
        ]
    },
    edad: 23,
}
var materias = persona.estudiante.materias;

//for ( var materia of materias){
//    console.log(`${persona.nombre} ${materia} ${persona.edad}`)
//}


var nuevoArray = materias.map(materia => materia)
console.log(nuevoArray)
nuevoArray.push("Algebra")
console.log(nuevoArray)
console.log(materias)
