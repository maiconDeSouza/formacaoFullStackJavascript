/*
JSON

JavaScript Object Notation

xml
*/

const obj = {
    nome: 'Fulano',
    idade: 23
}

const objJSON = JSON.stringify(obj)

console.log(objJSON)

const newObj = JSON.parse(objJSON)

console.log(newObj)