const frases = document.querySelector('#frases')

function escreverNaTela(frase){
  const p = document.createElement('p')
  p.innerText = frase
  frases.appendChild(p)
}

function remove(p){
   if(p.length > 0){
      frases.removeChild(p[p.length - 1])
   }
}

const inputTexto = document.querySelector('#texto')
const botaoAdd = document.querySelector('#add')
const botaoRemove = document.querySelector('#remove')


botaoAdd.addEventListener('click', e =>{
   e.preventDefault()
   escreverNaTela(inputTexto.value)
})

botaoRemove.addEventListener('click', e =>{
   e.preventDefault()
   const p = document.querySelectorAll('#frases p')
   remove(p)
})