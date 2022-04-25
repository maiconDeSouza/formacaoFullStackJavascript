let aluno = {

  nome: 'Maria',

  sobrenome: 'da Silva',

  notas: [7, 10, 8, 5, 7, 9],

}

const soma = aluno.notas.reduce((acc, item) =>{
  return acc += item
}, 0)


const newAluno = {...aluno, bimestres: aluno.notas.length, media: Number((soma/aluno.notas.length).toFixed(2))}

console.log(newAluno)

