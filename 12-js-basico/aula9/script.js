const idade = 18

const suaIdade = document.querySelector('#idade')
const p = document.querySelector('#text')

document.addEventListener('focusout', e =>{
   const suaIdadeNumber = Number(suaIdade.value)
   if(suaIdadeNumber < 0){return p.innerText = ''}
   if(suaIdadeNumber === 0){return p.innerText = ''}
   if(suaIdadeNumber >= 18){return p.innerText = 'Você pode entrar!'}
   return p.innerText = 'Vaza pirralho!'
})

