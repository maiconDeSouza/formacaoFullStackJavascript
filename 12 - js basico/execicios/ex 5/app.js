const tabuadaDo = Number(prompt('Você gostaria de saber qual Tabuada?'))
const ateQuanto = Number(prompt('Quante qual número?'))


function validacao(tabuadaDo, ateQuanto){
    let retorno = ''
    if(isNaN(tabuadaDo) || isNaN(ateQuanto)){return document.write('Um dos dois valores está errado!')}
    for(let valor = 1; valor <= ateQuanto; valor++){
       retorno += `${tabuadaDo} x ${valor} = ${tabuadaDo * valor}<br>`
    }

    return retorno
}

document.write(validacao(tabuadaDo, ateQuanto))
