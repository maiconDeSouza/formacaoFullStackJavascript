const API_URL = 'http://localhost:7981/api/products'
const productsList = document.querySelector('#products-list')
const form = document.querySelector('#form')
obterLista()


        function criaLista(data){
            productsList.innerHTML = ''
            data.forEach(element => {
                const li = document.createElement('li')
                li.textContent = `Nome: ${element.name} - Empresa: ${element.brand} - Valor ${element.price}`
                productsList.appendChild(li)
            })
        }

       function obterLista(){
        fetch(API_URL).then(res => {
            res.json().then(data => {
                criaLista(data)
            })
        })
       }
       

        // Ao Cadastrar

        form.addEventListener('submit', e => {
            e.preventDefault()
            const name = document.forms['form'].name.value
            const brand = document.forms['form'].brand.value
            const price = document.forms['form'].price.value

            fetch(API_URL, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    brand,
                    price,
                })
            }).then(response => {
                form.reset()
                if(response.status === 200){
                    alert('Cadastro realizado com Sucesso!')
                } else {
                    alert('Ops, deu algum erro!')
                }
                obterLista()
            })
        })