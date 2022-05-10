const CustomersModel = require('../models/customers')
const crypto = require('../utils/password')




function cadastro(req, res){
    res.render('register', {
        h1: 'Cadastrar Usuário',
        title:"Cadastro",
        cadastro: ''
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    if(name && age && email && password){
        const register = new CustomersModel({
            name,
            age,
            email,
            passwordCrypto
        })
    
        register.save()
    
        res.render('register',{
            h1: 'Cadastrar Usuário',
            title:"Cadastro",
            cadastro: 'Cadastrado com sucesso!'
        })
    } else{
        res.render('register',{
            h1: 'Cadastrar Usuário',
            title:"Cadastro",
            cadastro: 'preencha todos dados'
        })
    }
}

async function listUsers(req, res){
    const users = await CustomersModel.find()

    res.render('list-users',{
        h1: "Listar Usuários",
        title:"Lista de Usuários",
        users
    })
}

async function edit(req, res){
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    
    res.render('edit',{
        h1: 'Editar Usuário',
            title:"Editar",
            user: user
    })
}

async function editUser(req, res){
    const {name, age, email} = req.body
    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    const users = await CustomersModel.find()

    res.redirect('/listar')
}

async function del(req, res){
    const { id } = req.query
    
   const remove = await CustomersModel.deleteOne({
        _id: id
    })

    if(remove.ok){
        res.redirect('/listar')
    }

}

module.exports = {
    add,
    cadastro,
    listUsers,
    edit,
    editUser,
    del
}