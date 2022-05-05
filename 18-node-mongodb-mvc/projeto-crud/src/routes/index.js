const router = require('express').Router()

router.get('/', (req, res)=>{
    res.render('index', {
        title: 'Home'
    })
})

router.get('/cadastro', (req, res)=>{
    res.render('register', {
        title:"Cadastro"
    })
})

module.exports = router