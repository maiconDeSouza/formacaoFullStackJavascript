const menuMobile = document.querySelector('.menuMobile')

const botao = document.querySelector('.botaoMenu')

botao.addEventListener('click', (e) =>{

    const vv = botao.innerText
    if (vv === 'Abrir Menu'){
        menuMobile.classList.add('abrirMenu')
        botao.innerHTML = 'Fechar Menu'
    }

    if(vv === 'Fechar Menu'){
        menuMobile.classList.remove('abrirMenu')
        botao.innerHTML = 'Abrir Menu'
    }

    
})