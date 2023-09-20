/**
 * Formas de modificar el html desde JS
 * querySelectorAll regresa un arreglo con todos los h1
 */

// const titulo = document.querySelector('#subtitulo')
// titulo.innerHTML = "Aprendiendo DOM"

// const cursos = document.querySelector('.cursos')
// cursos.innerHTML = "Soy un curso"

// const subtitulo2 = document.getElementById('subtitulo2')
// subtitulo2.innerText = "Soy el subtitulo 2"

//titulos[0].innerText = "BootCamp 2023"

//Saca todos los titulos
// titulos.forEach(titulo =>{  
// })
//console.log(titulo.innerText.length)

//Random generador
// const parrafo = document.createElement('p')
// const boton= document.createElement('button')
// const numeroRandom = ()=>{
//     parrafo.innerText = Math.floor(Math.random() * 20);
//     document.body.appendChild(parrafo)
// }
//Esta es la otra forma de hacerlo
// function numeroRandom (){
//     parrafo.innerText = Math.floor(Math.random() * 20);
//     document.body.appendChild(parrafo) 
// }

// boton.innerText = "Random"
// boton.addEventListener('click', numeroRandom)
// document.body.appendChild(boton)

//TAREA TIPO DE CAMBIO PESOS A DOLARES USANDO EL INPUT Y QUE MUESTRE EL DINERO
// const monedaNacional = document.getElementById('monedaNacional')
// const total = document.createElement('p')
// const boton= document.createElement('button')
// boton.innerText = 'Calcular'
// document.body.appendChild(monedaNacional)
// document.body.appendChild(boton)
// document.body.appendChild(total)

// boton.addEventListener('click', (e) =>{
//     e.preventDefault()
//     if (monedaNacional.value !== '') {
//         total.innerText = 'Total en dolares: ' + (monedaNacional.value * 0.060).toFixed(2);
//     } else {
//         total.innerText = 'Ingrese un valor valido';
//     }
// });



