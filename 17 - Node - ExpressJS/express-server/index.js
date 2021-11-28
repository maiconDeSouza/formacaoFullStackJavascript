const express = require('express')
const app = express()
const path = require('path') //Biblioteca do node
const fs = require('fs')


app.set('view engine', 'ejs')


// Definindo os arquivos estáticos
// app.use(express.static(path.join(__dirname, 'views'))) // forma mais enxuta

// Definindo os arquivos públicos
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)

//habilitar server para receber dados via post (formulário)
app.use(express.urlencoded({extended:true}))


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

app.get('/cadastro-posts', (req, res) =>{
    const {cadastro} = req.query
    res.render('cadastro-posts', {
        title: 'Digital Tech - Cadastro Posts',
        cadastrado: cadastro
    })
})

app.post('/salvar-post', (req, res) =>{
    const {titulo, texto} = req.body
    const data = fs.readFileSync('./store/post.json')
    const posts = JSON.parse(data)

    posts.push({
        titulo,
        texto,
    })

    const postString = JSON.stringify(posts)
    fs.writeFileSync('./store/post.json', postString)
    res.redirect('/cadastro-posts?cadastro=1')
})

//404 error (not found)
app.use((req, res) =>{ //middleware
    res.send('Olá, essa página não foi encontrada!')
})



//executando o servidor
const port =  3333
app.listen(port, () => console.log(`Server is Listening on port ${port}`))

