/*
String
number
boolean
array
object
undefined
null
*/

//String *****
let nome = 'Maicon'
console.log(nome)

//string - concatenada
let sobrenome = 'Souza'
// console.log(nome + ' ' + sobrenome) antiga

console.log(`${nome} ${sobrenome}`) //template string

//Number *****
let idade = 33

console.log(idade + 10)
let porcentagem = 35.5
console.log(`${porcentagem}%`)


//boolean *****
let maiorDeIdade = true
console.log(maiorDeIdade)


//array *****
let habiltades = ['html', 'css', 'js']
console.log(habiltades)
console.log(habiltades.length)
console.log(habiltades[0])

//object *****
let pessoa = {
    nome: 'Fulano',
    sobrenome: 'da Silva',
    idade: 25,
    habiltades: ['html', 'css', 'js']
}

console.log(pessoa)
console.log(`${pessoa.nome} ${pessoa.sobrenome} ${pessoa.habiltades[0]}`)

//undefined *****
let endereco 
console.log(endereco)

//null *****
let cidade = null
console.log(cidade)