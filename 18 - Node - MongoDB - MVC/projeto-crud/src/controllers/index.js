function index(req, res){
    res.render('index', {
        title: "Home Page"
    })
}

module.exports = {
    index
}