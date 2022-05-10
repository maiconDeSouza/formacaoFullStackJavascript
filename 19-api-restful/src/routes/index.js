const router = require('express').Router()
const ProductsControllers = require('../controllers/products')


router.get('/products', ProductsControllers.get)
router.post('/products', ProductsControllers.post)
router.put('/products/:id', ProductsControllers.put)
router.delete('/products/:id', ProductsControllers.del)

module.exports = router