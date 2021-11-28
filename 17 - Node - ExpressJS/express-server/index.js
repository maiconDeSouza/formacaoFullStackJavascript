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
    res.render('index', {
        title: 'Digital Tech - Home'
    })
})

app.get('/produtos', (req, res) =>{
    res.render('produtos', {
        title: 'Digital Tech - Produtos'
    })
})

app.get('/quemsomos', (req, res) =>{
    res.render('quemsomos', {
        title: 'Digital Tech - Quem Somos'
    })
})

app.get('/posts', (req, res)=>{
    res.render('posts', {
        title: 'Digital Tech - Posts',
        posts: [
            {
                title: 'Novidades da tecnologia',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, 
                laudantium magnam. Odio facilis quam, modi ipsa ipsum consequuntur reprehenderit. 
                Distinctio animi esse dicta iure nesciunt mollitia laudantium eaque omnis quos.
                `,
                stars: 3
            },
            {
                title: 'JS o Futuro e o Presente',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, 
                laudantium magnam. Odio facilis quam, modi ipsa ipsum consequuntur reprehenderit. 
                Distinctio animi esse dicta iure nesciunt mollitia laudantium eaque omnis quos.
                `,

            },
            {
                title: 'Node o ponta pé da revolução',
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, 
                laudantium magnam. Odio facilis quam, modi ipsa ipsum consequuntur reprehenderit. 
                Distinctio animi esse dicta iure nesciunt mollitia laudantium eaque omnis quos.
                `,
                stars:5
            }
        ]
    })
})

//404 error (not found)
app.use((req, res) =>{ //middleware
    res.send('Olá, essa página não foi encontrada!')
})



//executando o servidor
const port =  8080
app.listen(port, () => console.log(`Server is Listening on port ${port}`))

