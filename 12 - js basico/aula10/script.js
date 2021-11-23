const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const button = document.querySelector('#button')
const form = document.querySelector('#form')
const p = document.querySelector('#text')


button.addEventListener('click', e => {
   e.preventDefault()

   const n1 = Number(nota1.value)
   const n2 = Number(nota2.value)

   const resultado = (n1 + n2) / 2
   if (n1 > 10 || n1 < 0){return p.innerText = 'Informe valores entre 0 a 10'}
   if (n2 > 10 || n2 < 0){return p.innerText = 'Informe valores entre 0 a 10'}
   
   if(resultado === 10){return p.innerText = `Você teve media ${resultado} - foi aprovado com honra!`}
   if(resultado < 10 && resultado >= 8 ){return p.innerText = `Você teve media ${resultado} - foi aprovado`}
   if(resultado >= 6 && resultado <= 7 ){return p.innerText = `Você teve media ${resultado} - foi passou por pouco`}
   if(resultado === 5){return p.innerText = `Você teve media ${resultado} - Você está de recuperação`}
   if(resultado <= 4){return p.innerText = `Você teve media ${resultado} - Você reprovou!`}
})
