const estado = document.querySelector('#estados')
const cidades = document.querySelector('#cidades')
const cidadesSPeRj = [
['São Paulo', 'Mauá', 'São Caetano', 'Santo André'], 
['Rio de Janeiro', 'Macaé', 'Volta Redonda', 'Resende']
]
const botao = document.querySelector('button')

function criaCidades(valor){
    const label = document.createElement('label')
    const select = document.createElement('select')
    label.setAttribute('for','estados')
    label.innerText = 'Cidades'
        
    for(let i = 0; i < cidadesSPeRj[valor].length; i++){
            const op = document.createElement('option')
            op.innerText = `${cidadesSPeRj[valor][i]}`
            op.setAttribute('value',`${cidadesSPeRj[valor][i]}`)
            select.appendChild(op)
        }
    cidades.appendChild(label)
    cidades.appendChild(select)
}


document.addEventListener('change', () =>{
    if(estado.value === 'sp'){
        cidades.innerHTML = ''
        criaCidades(0)

    } else if(estado.value === 'rj'){
        cidades.innerHTML = ''
        criaCidades(1)
    }
})

botao.addEventListener('click', e =>{
    e.preventDefault()
    
})






