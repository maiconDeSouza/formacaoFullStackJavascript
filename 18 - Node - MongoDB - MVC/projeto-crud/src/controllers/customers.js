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
    res.send('cadastro Realizado')
}

function remove(){
    
}

async function listerUsers(req, res){
    const users = await CustomersModel.find()

    res.render('list-users', {
        title: 'Listagem de Usuários',
        users,
    })
}

module.exports = {
    add,
    remove,
    index,
    listerUsers

}