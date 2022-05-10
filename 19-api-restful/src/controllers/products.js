const ProductsModel = require('../models/products')

async function get(req, res){
    const { id } = req.params

    const obj = id ? {_id : id} : null

    const products = await ProductsModel.find(obj)

    if(products.length <= 0){
       return res.status(200).json({message: "Nenhum Produto Encontrado!"})
    }

    return res.status(200).json(products)
}

function post(req, res){

}

function put(req, res){

}

function del(req, res){

}

module.exports = {
    get,
    put,
    post,
    del
}