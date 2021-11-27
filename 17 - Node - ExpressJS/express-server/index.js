const express = require('express')
const app = express()
const path = require('path') //Biblioteca do node
app.set('view engine', 'ejs')


// Definindo os arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views'))) // forma mais enxuta

// Definindo os arquivos públicos
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)


//rotas
app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/produtos', (req, res) =>{
    res.render('produtos')
})

app.get('/quemsomos', (req, res) =>{
    res.render('quemsomos')
})

//404 error (not found)
app.use((req, res) =>{ //middleware
    res.send('Olá, essa página não foi encontrada!')
})



//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is Listening on port ${port}`))

