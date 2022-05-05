const express = require('express')
const path = require('path')
// const mongoose = require('mongoose')

const router = require('./routes')
const db = require('./database')

const app = express()

db.connect()

// const schema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String,
//     password:String
// })

// const Model = mongoose.model('customers', schema)

// const register = new Model({
//     name: 'Maicon',
//     age:34,
//     email:'maicon_souza09@hotmail.com',
//     password:'12345seis'
// })

// register.save()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))


app.use('/',router)


app.use((req, res)=>{
    res.send('Página não encontrada!')
})

const port = process.env.PORT || 1992

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))