function inverter(palavra){
    const palavraInvertida = palavra.split('').reverse().join('')
    return palavraInvertida
}


function palindromos(palavra){
    const palavraInvertida = inverter(palavra)
    
    if(palavra.length <= 2){ return `Palavra não é valida`}
    if(palavra.toLowerCase() === palavraInvertida.toLowerCase()){return `É um Palíndromo!`}
    return `Não é um Palídeomo!`
}


console.log(palindromos('Aba'))
console.log(palindromos('Abi'))
console.log(palindromos('Ab'))
