const button = document.querySelector('button')

const inputs = document.querySelectorAll('input')

const sele = document.querySelector('select')

const formulario = document.querySelector('#formCadastro')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    
    for(let valor of inputs){
       if (!valor.value){
           valor.classList.add('inputError')
           const pegaSpan = valor.nextSibling.nextSibling
           pegaSpan.innerText = `Preencha seu ${valor.name}!`
       } else {
        valor.classList.remove('inputError')
        const pegaSpan = valor.nextSibling.nextSibling
        pegaSpan.innerText = ``
       }
    }
    if(!sele.options[sele.selectedIndex].value){
        sele.classList.add('inputError')
        const pegaSpan = sele.nextSibling.nextSibling
        pegaSpan.innerText = `Preencha seu estado!`
    } else {
        sele.classList.remove('inputError')
        const pegaSpan = sele.nextSibling.nextSibling
        pegaSpan.innerText = ``
    }

    const classError = document.querySelector('.inputError')
    if(!classError){
        formulario.submit()
    }
})