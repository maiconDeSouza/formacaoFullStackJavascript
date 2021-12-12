const express = require('express')



const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexao com o banco de dados
db.connect()

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended:true}))


app.use('/api', routes)


const port = process.env.port || 7981
app.listen(port, () => console.log(`Server is listening on port ${port}`))