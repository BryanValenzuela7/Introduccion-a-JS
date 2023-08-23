/**
 * Usando alertas basicas
 */
//var mensaje = 'Soy una alerta'
//window.alert(mensaje)
//console.log('Continua el codigo...')

/**
 * Alerta para obtener datos del usuario
 * prompt(text, [default]);
 */
var edad = document.createElement('p') 
edad.textContent = prompt('Cuantos años tienes')
document.body.appendChild(edad)
/**
 * Usar un modal para confirmar
 */
var resultado = window.confirm('Estudias')
if(resultado){
window.alert('Felicidades')
} else{
    window.alert(':(')
}