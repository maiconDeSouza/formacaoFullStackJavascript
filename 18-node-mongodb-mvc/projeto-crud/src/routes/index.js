const router = require('express').Router()

const CustomersController = require('../controllers/custmers')
const IndexController = require('../controllers/index')

//rotas
router.get('/', IndexController.index)

//registra
router.get('/cadastro', CustomersController.cadastro)
router.post('/cadastro/add', CustomersController.add)

//listar
router.get('/listar', CustomersController.listUsers)

//Edit
router.get('/edit', CustomersController.edit)
router.post('/edit/:id', CustomersController.editUser)

//Deletar
router.get('/del', CustomersController.del)




module.exports = router