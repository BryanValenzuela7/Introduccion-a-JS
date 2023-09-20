import './style.css'
import Header from './components/Header'
import Formulario from './components/Formulario'


const veterinaria = {
  title : 'Veterinaria',

}
document.body.appendChild(Header(veterinaria.title))
document.body.appendChild(Formulario())
