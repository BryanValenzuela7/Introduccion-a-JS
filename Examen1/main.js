import './style.css'
import Cards from './components/Cards'
import { apiData } from './helper/data'


const main = document.createElement('main')
apiData.forEach((data)=>{
    main.appendChild(Cards(data))
})
document.body.appendChild(main)