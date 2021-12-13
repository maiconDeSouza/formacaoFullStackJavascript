const API_URL = 'http://localhost:7981/api/products'
const productsList = document.querySelector('#products-list')
const form = document.querySelector('#form')
obterLista()


        function criaLista(data){
            productsList.innerHTML = ''
            data.forEach(element => {
                const li = document.createElement('li')
                const a = document.createElement('a')
                a.setAttribute('href', '#')
                a.setAttribute('class', 'botao-excluir')
                a.setAttribute('data-id', `${element._id}`)
                a.textContent = '[remove]'
                li.textContent = `Nome: ${element.name} - Empresa: ${element.brand} - Valor ${element.price} - `
                li.appendChild(a)
                productsList.appendChild(li)
            })

            const botoesExcluir = document.querySelectorAll('.botao-excluir')
            botoesExcluir.forEach(botao => {
                botao.addEventListener('click', e => {
                    e.preventDefault()
                    const el = e.target
                    const id = el.getAttribute('data-id')

                    fetch(`${API_URL}/${id}`, {
                        method: 'DELETE'
                    }).then(resp => {
                        console.log(resp)
                        obterLista()
                    })
                })
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