const ProductsModel = require('../models/products')



async function get(req, res){
    const {id} = await req.params

    if(id){
        const products = await ProductsModel.find({_id:id})
        res.send(products)
    } else {
        const products = await ProductsModel.find()
        res.send(products)
    }
}

async function post(req, res){
    const {
        name,
        brand, 
        price
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price
    })

    product.save()

    res.send()
}

module.exports = {
    get,
    post
}