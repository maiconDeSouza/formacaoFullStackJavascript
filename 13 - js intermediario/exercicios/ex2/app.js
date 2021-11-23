const contador = document.querySelector('#contador')
const menos = document.querySelector('#menos')
const mais = document.querySelector('#mais')
let cont = 0
let menosCont;
let maisCont;

contador.innerText = `${cont}`



document.addEventListener('click', e =>{
    const el = e.target
    
    if(el.textContent === '+'){
        mais.classList.add('mais')
        menos.classList.remove('menos')
        clearInterval(menosCont)
        maisCont = setInterval(() =>{
            contador.innerText = `${++cont}`
        }, 1000)
        
    } else if (el.textContent === '-'){
        menos.classList.add('menos')
        mais.classList.remove('mais')
        clearInterval(maisCont)
        menosCont = setInterval(() =>{
            contador.innerText = `${--cont}`
        },1000)
    }
})