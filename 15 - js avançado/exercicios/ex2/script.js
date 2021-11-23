const alunos = [

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

    nome: 'Pedro',

    sobrenome: 'Souza',

    nota: 5,

  },

]

function verificacao(item){
  if(item.nota >= 7){
    return item
  }
}

const aprovados = alunos.filter(verificacao)

console.log(aprovados)