const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

function index (req, res){
    res.render('register', {
        title: "Cadastro de Clientes"
    })
}

async function add(req, res){
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCripto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCripto,
    })

    register.save()
    res.render('register', {
        title: "Cadastro de Clientes",
        msg: "Cadastro realizado com Sucesso"
    })
}


async function listerUsers(req, res){
    const users = await CustomersModel.find()

    res.render('list-users', {
        title: 'Listagem de Usuários',
        users,
    })
}


async function indexEdit(req, res){
    const {id} = await req.query
    const user = await CustomersModel.findById(id)
    
    res.render('edit', {
        title: 'Editar Usuário',
        user
    })
}

async function edit(req, res){
    const {
        name,
        age,
        email,
    } = await req.body

    const {id} = await req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email
    user.save()

    res.render('edit', {
        title: "Editar Usuário",
        user,
        msg: "Usuário Alterado com Sucesso"
    })
}

async function remove(req, res){
    const {id} = req.params
    
   const remove = await CustomersModel.deleteOne({_id: id})

   if(remove.deletedCount){
       res.redirect('/list-users')
   }
}


module.exports = {
    add,
    remove,
    index,
    listerUsers,
    indexEdit,
    edit,
    remove

}