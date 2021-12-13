const API_URL = 'http://localhost:7981/api/products'
const productsList = document.querySelector('#products-list')
const form = document.querySelector('#form')
const formEdit = document.querySelector('#form-edit')
const div = document.querySelector('.hidden')
obterLista()


        function criaLista(data){
            productsList.innerHTML = ''
            data.forEach(element => {
                const li = document.createElement('li')
                const aEditar = document.createElement('a')
                aEditar.setAttribute('href', '#')
                aEditar.setAttribute('class', 'botao-editar')
                aEditar.setAttribute('data-id', `${element._id}`)
                aEditar.setAttribute('data-name', `${element.name}`)
                aEditar.setAttribute('data-brand', `${element.brand}`)
                aEditar.setAttribute('data-price', `${element.price}`)
                aEditar.textContent = '[editar] - '

                const aExcluir = document.createElement('a')
                aExcluir.setAttribute('href', '#')
                aExcluir.setAttribute('class', 'botao-excluir')
                aExcluir.setAttribute('data-id', `${element._id}`)
                aExcluir.textContent = '[remove]'

                li.textContent = `Nome: ${element.name} - Empresa: ${element.brand} - Valor ${element.price} - `
                li.appendChild(aEditar)
                li.appendChild(aExcluir)

                productsList.appendChild(li)
            })

            const botoesExcluir = document.querySelectorAll('.botao-excluir')
            const botoesEditar = document.querySelectorAll('.botao-editar')

            exclusaoDeProdutos(botoesExcluir)
            editarProduto(botoesEditar)
            
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


        //Cadastrar
        formEdit.addEventListener('submit', e => {
            e.preventDefault()
            const el = e.target
            // const id = el.getAttribute('data-id')
            const id = document.forms['form-edit'].id.value
            const name = document.forms['form-edit'].name.value 
            const brand = document.forms['form-edit'].brand.value 
            const price = document.forms['form-edit'].price.value

            
            fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                        'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                        name,
                        brand,
                        price,
                        })
                    }).then(resp => {
                        formEdit.reset()
                        console.log(resp)
                        obterLista()
                    })
        })

        function exclusaoDeProdutos(botoesExcluir){
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

        function editarProduto(botoesEditar){
            botoesEditar.forEach(botao => {
                botao.addEventListener('click', e => {
                    e.preventDefault()
                    const el = e.target
                    
                    div.classList.remove('hidden')
                    const id = el.getAttribute('data-id')
                    const name = el.getAttribute('data-name')
                    const brand = el.getAttribute('data-brand')
                    const price = el.getAttribute('data-price')


                    document.forms['form-edit'].id.value = id
                    document.forms['form-edit'].name.value = name
                    document.forms['form-edit'].brand.value = brand
                    document.forms['form-edit'].price.value = price

                })
            })
        }