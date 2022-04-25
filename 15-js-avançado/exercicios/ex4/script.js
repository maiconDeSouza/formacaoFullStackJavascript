let alunos = [

  {

    nome: 'Maria',

    sobrenome: 'da Silva',

    nota: 10,

  },

  {

    nome: 'José',

    sobrenome: 'Moreira',

    nota: 4,

  },

  {

    nome: 'Paulo',

    sobrenome: 'Henrique',

    nota: 7,

  },

  {

    nome: 'Sara',

    sobrenome: 'Souza',

    nota: 5,

  },

  {

    nome: 'Clara',

    sobrenome: 'Barbosa',

    nota: 9,

  },

  {

    nome: 'Rodrigo',

    sobrenome: 'Barros',

    nota: 4,

  },

  {

    nome: 'Renato',

    sobrenome: 'Barros',

    nota: 7,

  },

  {

    nome: 'Andrea',

    sobrenome: 'Batista',

    nota: 6,

  },

  {

    nome: 'Carla',

    sobrenome: 'Campos',

    nota: 3,

  },

]

const botao = document.querySelector('button')
const input = document.querySelector('#search')
const div = document.querySelector('div')


function criarHTML(array, valorPesquisa){
  if(array.length < 1){
    div.innerText = `Ninguém com a nota ${valorPesquisa}`
  } else {
    array.forEach((item) =>{
      const ul = document.createElement('ul')
      const li = document.createElement('li')
      const text = document.createTextNode(`${item.nome} ${item.sobrenome} - nota = ${item.nota} `)
      li.appendChild(text)
      ul.appendChild(li)
      div.appendChild(ul)
    })
  }
}


botao.addEventListener('click', (e)=>{
  const ul = document.querySelector('ul')
  const text = document.querySelector('div').innerText
  if(ul){div.removeChild(ul)}
  if(text){div.innerText = ''}
  const valor = Number(input.value)

  if(isNaN(valor) || valor < 0){
    input.value = ''
    return div.innerHTML = 'Digite uma nota de 0 à 10'
  } else{
    const filtro = alunos.filter((item) =>{
      if(item.nota === valor){return item}
    })
    
    criarHTML(filtro, valor)
    input.value = ''
  }

})


