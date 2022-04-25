/*
Promises
*/


function carregarFotos(){

    return new Promise((resolve, reject)=>{

        const xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText)

            resolve(response)
        }

        if(this.status === 404){
            reject()
        }

}

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photoss', true)
    xhttp.send()
        
    })
    
}

function exibirNatela(dados){
    console.log(`Olá Mundo!`)
    console.log(dados)
}

function exibirError(){
    console.log(`Ops, deu um erro!`)
}



const button = document.querySelector('button')

button.onclick = () => 
carregarFotos()
    .then(exibirNatela)
    .catch(exibirError)