/**
 * Practica 2: se debe validar el formulario con las siguientes caracteristicas
 * 1.- Si un campo esta vacio se debera indicar un error al usuario
 * 2.- La contraseña debera ser validada atraves de una expresion regular que valide que el campo debera tener al menos 6 caracteres,
 *     una mayuscula y un numero
 * 3.- En caso de colocar los casos correctos, lanzar un mensaje indicando que se hizo el login correcto
 */
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+\-])[0-9a-zA-Z@#$%^&*()_+\-]{6,12}$/;
const password = document.getElementById('password');
const boton = document.getElementById('botonSign');
const noValidada = document.querySelector('#noValidada')

boton.addEventListener('click', (e)=>{
    e.preventDefault()
    if (passwordRegex.test(password.value)) {
        window.alert('Se ha iniciado sesión de manera correcta');
    } else {
        noValidada.innerHTML = 'La contraseña no cumple con alguno de las reglas'
    }
});

