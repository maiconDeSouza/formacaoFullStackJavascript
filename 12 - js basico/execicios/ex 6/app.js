let listaAtores = [

    {
  
      nome: 'Keanu Reeves',
  
      personagem: 'Neo',
  
      filme: 'The Matrix',
  
    },
  
    {
  
      nome: 'David Prowse',
  
      personagem: 'Darth Vader',
  
      filme: 'Star Wars Episódios IV-VI',
  
    },
  
    {
  
      nome: 'Bruce Wayne',
  
      personagem: 'Batman',
  
      filme: 'Batman - O Início'
  
    },
  
  ]

  const bodyy = document.querySelector('body')

  function criaeDiv(valor){
      const div = document.createElement('div')
      const h2 = document.createElement('h2')
      const p = document.createElement('p')
      h2.innerText = `${valor.nome}`
      p.innerText = `Interpreta o personagem ${valor.personagem} no filme ${valor.filme}`
      div.classList.add('conteudo')
      div.appendChild(h2)
      div.appendChild(p)
      bodyy.appendChild(div)
  }

  for(let valor of listaAtores){
      criaeDiv(valor) 
  }
