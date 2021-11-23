let clientes = [
   {
      nome: 'Maicon',
      idade: 33,
      linguagens: ['JS', 'C#']
   },
   {
      nome: 'Thiago',
      idade: 35,
      linguagens: ['JS', 'python', 'php']
   },
   {
      nome: 'Indiano',
      idade: 12,
      linguagens: ['C', 'C++', 'C#', 'Java', 'Delphi', 'python', 'php', 'Go', 'Portugol']
   }
]
let htmlClientes = ''

document.querySelector('#lista-clientes').innerHTML = ''

for(let valor of clientes){
   let listaLinguagens = ``
   for(let linguagens of valor.linguagens){
      listaLinguagens += `<li>${linguagens}</li>`
   }
   htmlClientes += `
   <ul id="lista-clientes">
        <li>
            <b>Nome:</b> ${valor.nome} <br>
            <b>Idade:</b> ${valor.idade} <br>
            <b>Linguagens:
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    </ul>
   `
}
document.querySelector('#lista-clientes').innerHTML = htmlClientes