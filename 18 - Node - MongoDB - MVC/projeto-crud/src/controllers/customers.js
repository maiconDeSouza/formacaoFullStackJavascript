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

module.exports = {
    add,
    remove,
    index

}