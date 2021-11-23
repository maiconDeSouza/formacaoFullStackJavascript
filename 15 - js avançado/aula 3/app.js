/*
Arrow Functions

Es6

As funções de seta nos permitem escrever uma sintaxe
de função mais curta.

*/

const helloWorld = () => console.log(`Olá Mundo!`)

helloWorld()

//entendendo this na Arrow Fuctions

const bt = document.querySelector('button')

bt.addEventListener('click', function(){
    console.log(`Função normal o this é ${this}`)
})

bt.addEventListener('click', () =>{
    console.log(`Arrow o this é ${this}`)
})

//Na função normal o This pode variar

//Na Arrow Function o escopo do This é sempre referente a o local onde a função foi declarada
