/*
destruction
*/

function transformarJSON(response){
    return response.json()
}

function exibirNatela(dados){
    const {name, lastname, phone} = dados
    console.log(`Name: ${name} ${lastname} - Phone: ${phone}`)
}

function exibirError(){
    console.log(`Ops, deu um erro!`)
}



const button = document.querySelector('button')

button.onclick = async () => {
   const retorno = await fetch('https://jsonplaceholder.typicode.com/users/1')
   const retornoJson = await transformarJSON(retorno)
   return exibirNatela(retornoJson)
    
}