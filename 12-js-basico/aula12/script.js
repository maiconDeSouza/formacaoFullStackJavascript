// for(let x =1; x <= 5000; x++){
//    if(x % 2 === 0){continue}
//    document.write(`${x} - Olá Mundo!</br>`)
// }

let opcoes;

const ano = document.querySelector('#ano')

for (let x = 1900; x <= 2021; x++){
   opcoes = `<option value="">${x}</option>`
   ano.innerHTML += opcoes
}