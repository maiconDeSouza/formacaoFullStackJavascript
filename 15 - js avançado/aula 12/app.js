/*

Callback

*/


function carregarFotos(callback){
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        const response = JSON.parse(this.responseText)

        if(callback){
            callback(response)
        }
    }
}

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()
}

function exibirNatela(dados){
    console.log(`Olá Mundo!`)
    console.log(dados)
}



const button = document.querySelector('button')

button.onclick = () => carregarFotos(exibirNatela)