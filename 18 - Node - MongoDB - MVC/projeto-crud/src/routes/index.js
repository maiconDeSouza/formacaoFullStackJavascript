const router = require('express').Router()
const CustomersController = require('../controllers/customers')




    router.get('/', (req, res) =>{
        res.render('index', {
            title: "Home Page"
        })
    })

    router.get('/register', (req, res) =>{
        res.render('register', {
            title: "Cadastro de Clientes"
        })
    })

    router.post('/register/add', CustomersController.add)


module.exports = router