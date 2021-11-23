const quadrado = document.querySelector('div.quadrado')

function minhaFuncao (){
    console.log(`Olá`)
}

function minhaFuncao2 (e){
    console.log(e.key)
}


quadrado.addEventListener('mousemove', minhaFuncao)

document.addEventListener('keypress', minhaFuncao2)