/**
 * Destricturing arrays
 */

//const arr = [23,45,[3,4]]
// const var1 = arr[0] //23
// const var2 = arr[1] //45
// const var3 = arr[2] //67
// const var4 = arr[3] //24

//const [var1 =1,var2 =1,var3=1,var4=1, var5=1] = arr //Esto es lo mismo de arriba, pero desustructurado | el =1 es el predeterminado en caso de no encontrar 
//console.log(var1,var2,var3,var4, var5)

//Obtener 3 y 4 en dos variables diferentes
// const [, , [a,b]] = arr
// console.log(a,b)

/**
 * EJEMPLO
 */
const restaurante = {
    name: 'Angelos Pizza',
    location: 'Plaza San Jeronimo 34',
    categories: ['Italian', 'Mexican', 'Vegetarian', 'Asian'],
    starterMenu: ['Finger Cheese', 'Nuggets','Garlic Bread', 'Boneless'],
    mainMenu: ['Pizza','Pasta','Beverages'],
    order:function(starterMenuIndex, mainMenuIndex){
        return[this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]]
    },
    openingHours: {
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 9,
            close: 23,
        },
        dom: {
            open: 10,
            close: 15,
        }
    },
    orderDelivery: function({time, address, mainMenuIndex,starterMenuIndex}){
        console.log(`
        Order Received:
        ${this.mainMenu[mainMenuIndex].toUpperCase()} and 
        ${this.starterMenu[starterMenuIndex].toUpperCase()}
        will be delivered to ${address.toUpperCase()} at ${time}
        `)
    },
}
//Dos Variables para las categorias
// const  [a,b] = restaurante.categories
// console.log(a,b)

// const  [starter, main] = restaurante.order(0,2)
// const order = document.createElement('p')
// order.innerHTML = `tu pedido contiene ${starter.toUpperCase()} y ${main.toUpperCase()}`
// document.body.appendChild(order)

//Object Destructuring 
const {name: restaurantName, openingHours: laborDays, categories: tags} = restaurante
//const {open,close} = restaurante.openingHours.fri
const {fri:{open,close},} = laborDays
const {menu= [], starterMenu: starter =[]} = restaurante //Menu no existe, pero pide regresar un array
console.log(restaurantName)
console.log(laborDays)
console.log(tags)
console.log(open,close)
console.log(menu,starter)
/**
 * Agregar la funcionalidad al restaurante para hacer entregas online
 */
restaurante.orderDelivery({
    time:'13:40',
    address: 'San Benito Ave',
    mainMenuIndex: 2,
    starterMenuIndex: 0,
})