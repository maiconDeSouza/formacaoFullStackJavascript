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
    const {
        name,
		brand,
		price
	} = req.body

    const register = new ProductsModel({
        name,
        brand,
        price
    })

    register.save()
    
    res.status(201).json(register)
}

async function put(req, res){
    const { id } = req.params
    // const { name, brand, price} = req.body
    // const atualizacao = {
    //     name,
    //     brand,
    //     price
    // }

    // const product = await ProductsModel.findById(id)
    
    // for(let prop in product){
    //     product[prop] = atualizacao[prop] ? atualizacao[prop] : product[prop]
    // }

    // await product.updateOne(req.body)

    // product.save()

    const product = await ProductsModel.findByIdAndUpdate({_id: id}, req.body, {new: true})
    
    res.status(200).json(product)

}

async function remove(req, res){
    const { id } = req.params
    const remove = await ProductsModel.deleteOne({_id: id})

    const message = remove.ok ? 'Sucess' : 'Error'

    res.status(200).json({
        message,
        remove
    })
}

module.exports = {
    get,
    put,
    post,
    remove
}