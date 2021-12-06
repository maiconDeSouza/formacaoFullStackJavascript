const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')


//rotas

    router.get('/', IndexController.index)

    //Register
    router.get('/register', CustomersController.index)

    router.post('/register/add', CustomersController.add)

    //listar usuários
    router.get('/list-users', CustomersController.listerUsers)

    //editar
    router.get('/edit', CustomersController.indexEdit)
    router.post('/edit/:id', CustomersController.edit)


module.exports = router