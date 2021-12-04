const express = require('express')
const path = require('path')

const app = express()

//Definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (Formiulário)
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req, res) =>{
    res.render('index', {
        title: "Hello World!"
    })
})

//404 error (not found)
app.use((req, res) =>{
    res.send('Página não encontrada!')
})

//executando o servidor

const port = process.env.port || 7981
app.listen(port, () => console.log(`Server is listening on port ${port}`))