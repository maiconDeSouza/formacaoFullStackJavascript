const botao = document.querySelector('button')
const input = document.querySelector('input')
const body = document.querySelector('body')

function removeDiv(){
    const div = document.querySelector('div')
    div.classList.remove('confirmacao2')
    setTimeout(()=>{
        body.removeChild(div)
    },500)
    
}

function funcaoCadastro(){
    const div = document.createElement('div')
    div.classList.add('confirmacao')
    div.innerText = `Tarefa ${input.value} Cadastrada com Sucesso!`
    body.appendChild(div)
    setTimeout(() =>{
        div.classList.add('confirmacao2')
    }, 500)
    setTimeout(removeDiv, 3000)
}

botao.addEventListener('click', funcaoCadastro)