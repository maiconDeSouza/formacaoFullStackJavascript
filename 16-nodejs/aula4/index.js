const fs = require('fs')

const valor = fs.readFileSync('./clientes.json', {encoding:"utf8"})

const valor2 = JSON.parse(valor)

console.log(Array.isArray(valor2))