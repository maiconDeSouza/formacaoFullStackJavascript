const ul = document.querySelector('ul')
const button = document.querySelector('button')
const form  = document.querySelector('form')




const urlBack = 'http://localhost:1992/api/products'

async function init(){
    const response = await axios.get(urlBack)
    const data = await response.data

    data.forEach(el => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const a2 = document.createElement('a')

        a.innerText = "[Editar]"
        a2.innerText = "[Remover]"

        a.setAttribute('href', '#')
        a.setAttribute('id-product-edit', `${el._id}`)

        a2.setAttribute('href', '#')
        a2.setAttribute('id-product-remove', `${el._id}`)

        li.innerText = `${el.name} | ${el.brand} | ${el.price} | `

        li.appendChild(a)
        li.appendChild(a2)
        
        ul.appendChild(li)
    })
    ed()
    rm()
}

init()

button.addEventListener('click',async e => {
    e.preventDefault()
    const clickButton = e.path[0].innerText
    const name = document.querySelector('#name').value
    const brand = document.querySelector('#brand').value
    const price = document.querySelector('#price').value

    if(clickButton === 'Cadastrar'){
       await axios.post(urlBack, {
            name,
            brand,
            price
        })
        ul.innerText = ''
        form.reset()
        init()
    }

    if(clickButton === 'Editar'){
        const id = button.id
        axios.put(`${urlBack}/${id}`,{
            name,
            brand,
            price
        })

        ul.innerText = ''
        form.reset()
        init()
        button.innerText = 'Cadastrar'
        button.setAttribute('id', '')
    }
})


function ed(){
    const editar = document.querySelectorAll('a[id-product-edit]')
    editar.forEach(el =>{
        el.addEventListener('click', async e =>{
            e.preventDefault()
            const id = e.target.attributes[1].value
            const response = await axios.get(`${urlBack}/${id}`)
            const { name, brand, price } = response.data[0]
            
            document.querySelector('#name').value = name
            document.querySelector('#brand').value = brand
            document.querySelector('#price').value = price
            button.innerText = 'Editar'
            button.setAttribute('id', `${id}`)
        })
    })
}

function rm(){
    const remove = document.querySelectorAll('a[id-product-remove]')
    remove.forEach(el =>{
        el.addEventListener('click', async e =>{
            e.preventDefault()
            
            const id = e.target.attributes[1].value
            await axios.delete(`${urlBack}/${id}`)
            
            ul.innerText = ''
            init()
        })
    })
}

