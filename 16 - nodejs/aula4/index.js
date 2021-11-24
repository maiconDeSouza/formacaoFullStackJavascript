const fs = require('fs')

fs.readFile('./clientes.json', (error, content) =>{
    if(error){
        return console.log(`Deu ruim`)
    }
    return console.log(JSON.parse(content))

})