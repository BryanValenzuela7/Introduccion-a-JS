var account ={
    pin: 1234,
    amount: 0,
    owner: 'Patricio Estrella',
    deposits: [],
}
console.log(account)

//Hacer depositos
account.deposits.push(100)
account.deposits.push(400)
account.deposits.push(1000)
account.deposits.push(100)
//Hacer retiros
account.deposits.push(-300)
account.deposits.push(-1000)

//Conocer el saldo
var copiaDepositos = account.deposits.map(money => money)
var total = copiaDepositos.reduce((suma, money) => suma + money)
if(total > 0){ 
    console.log(`El saldo todal es: $ ${total} MX`)
} else {
    console.log(`No cuentas con el saldo suficiente`)
}
