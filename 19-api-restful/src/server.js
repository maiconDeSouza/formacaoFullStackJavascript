const express = require('express')

const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api', routes)

const port = 1992
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))