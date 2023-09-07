import './style.css'
import Header from './components/header'
import { personas } from './helper/data'
import Card from './components/Card,js'

const empresa = {
titulo: 'Manejo de sistemas agrarios',
giro: 'Agricultura'
}
document.body.appendChild(Header(empresa))

const main = document.createElement('main')

personas.forEach((persona) => {
  main.appendChild(Card(persona))
});
document.body.appendChild(main)
