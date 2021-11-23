/*
Crie uma função que retorne uma promise

Essa função deverá levar 10 segundos para ser resolvida com o método resolve()

Ela deve resolver com texto: 'Ok, promise resolvida!' 

Você deve exibir esse texto no console

*/

function retornoDePromessa(){
  setTimeout(() =>{
    return new Promise((res, rej) =>{
      res(console.log('Ok, promise resolvida!' ))
    })
  },10000)
}

retornoDePromessa()

/*
function retornoDePromessa(){
  return new Promise((res, rej) =>{
    setTimeout(() =>{
      res(console.log(`'Ok, promise resolvida!' `))
    },10000)
  })
}

retornoDePromessa()

*/