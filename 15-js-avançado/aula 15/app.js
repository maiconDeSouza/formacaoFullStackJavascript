/*
Fetch Api
*/

function transformarJSON(response){
    return response.json()
}

function exibirNatela(dados){
    console.log(`Olá Mundo!`)
    console.log(dados)
}

function exibirError(){
    console.log(`Ops, deu um erro!`)
}



const button = document.querySelector('button')

button.onclick = async () => {
   const retorno = await fetch('https://jsonplaceholder.typicode.com/photos')
   const retornoJson = await transformarJSON(retorno)
   return exibirNatela(retornoJson)
    
}