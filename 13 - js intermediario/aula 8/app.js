const div = document.querySelector('div')
const botao = document.querySelector('#comecar')
const botao2 = document.querySelector('#pausar')

let contador = 0

function cont (e){
    let v = setInterval(() => {
        contador++
        div.innerText = contador
    }, 1000);

    if(e.path[0].innerText === 'Pausar'){
        clearInterval(v)
    } // não está dando certo
    
}


botao.addEventListener('click', cont)
botao2.addEventListener('click', cont)

