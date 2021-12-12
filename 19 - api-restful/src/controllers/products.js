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

async function put(req, res){
    const {id} = await req.params

    const product = await ProductsModel.findOneAndUpdate({_id:id}, req.body, {new:true})
    res.send(product)

    // const product = await ProductsModel.findOne({_id:id})

    // await product.updateOne(req.body)
    
    // res.send(product)

    
}

module.exports = {
    get,
    post,
    put
}