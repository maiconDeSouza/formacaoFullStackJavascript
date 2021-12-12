const express = require('express')
const app = express()

const routes = require('./routes/routes')

//habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended:true}))


app.use('/api', routes)


const port = process.env.port || 7981
app.listen(port, () => console.log(`Server is listening on port ${port}`))