const alunos = [
    {

        nome: 'Maria',

        sobrenome: 'da Silva',

      },

      {

        nome: 'José',

        sobrenome: 'Moreira',

      },

      {

        nome: 'Paulo',

        sobrenome: 'Henrique',

      },

      {

        nome: 'Pedro',

        sobrenome: 'Souza',

      }
]

const newAlunos = alunos.map((item) =>{
    return `${item.nome} ${item.sobrenome}`
})

console.log(newAlunos)