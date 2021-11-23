const botaoTeste = document.querySelector('#teste')

// botaoTeste.onclick = function(){
//     console.log(`Mensagem 1`)
// }

// botaoTeste.onclick = function(){
//     console.log(`Mensagem 2`)
// }

const newMsg = () => console.log(`Mensagem 3`)

botaoTeste.addEventListener('click', () =>{
    console.log(`Mensagem 1`)
})

botaoTeste.addEventListener('click', () =>{
    console.log(`Mensagem 2`)
})

botaoTeste.addEventListener('click', newMsg)