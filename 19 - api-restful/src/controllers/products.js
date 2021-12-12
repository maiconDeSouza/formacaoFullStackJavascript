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

module.exports = {
    get,
}