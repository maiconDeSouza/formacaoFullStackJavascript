const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    passwordCrypto:String
})

const Model = mongoose.model('customers', schema)

module.exports = Model
