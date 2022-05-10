function index(req, res){
    res.render('index', {
        h1: "Bem vindo Ao Banco MongoDB!",
        title: 'Home'
    })
}

module.exports = {
    index
}