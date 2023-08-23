/**
 * Usando el DOM API (Document Object Model)
 */
//Forma 1
//document.getElementById('parrafo').textContent = 'Bryan Valenzuela'

//Forma 2
var parrafo = document.getElementById('parrafo');
parrafo.textContent = 'Aprendiendo JS DOM API'

/**
 * Creando elementos desde JS a HTML
 */
var elemento = document.createElement('p')
elemento.textContent = 'Creando elementos'
document.body.appendChild(elemento)