const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 1992

app.set('view engine', 'ejs')

// const staticFolder = path.join(__dirname, 'view')
// const expressStatic = express.static(staticFolder)
// app.use(expressStatic)

//Não precisamos mais, pois o apontamento das pastas será feito pelo proprio ejs
// app.use(express.static(path.join(__dirname, 'view')))
app.use(express.static(path.join(__dirname, 'public')))

//habilta server para receber dados d um formulário
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Digital Tech',
        h2: "Seja bem vindo"
    })
})

app.get('/posts', (req, res)=>{
    const db = JSON.parse(fs.readFileSync('./store/db.json', {encoding:"utf8"}))
    res.render('posts', {
        title: "Digital Tech - Posts",
        h2: "Vejam os posts",
        posts: db
    })
})

app.get('/cadastro-posts', (req, res)=>{
    res.render('cadastro', {
        title:"Cadastro de Posts",
        h2:"Deixe seu post"
    })
})


app.post('/salvar-post', (req, res)=>{
    const db = JSON.parse(fs.readFileSync('./store/db.json', {encoding:"utf8"}))
    const {title, text, stars} = req.body
    const obj = {
        title,
        text,
        stars : Number(stars)
    }
    db.push(obj)

    fs.writeFileSync('./store/db.json', JSON.stringify(db))
    res.redirect('/cadastro-posts')
})

app.use((req, res) =>{
    res.send('404')
})
app.listen(port, () => console.log(`Servidor rodando na Porta ${port}`))


// {
//     title:"JS === FullStack",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos accusamus hic eius numquam blanditiis tempora, obcaecati consectetur quod repellendus porro soluta! At id maxime voluptatem sit consectetur ducimus. Excepturi.",
//     stars:3
// },
// {
//     title:"Node !== Ineficiência",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos accusamus hic eius numquam blanditiis tempora, obcaecati consectetur quod repellendus porro soluta! At id maxime voluptatem sit consectetur ducimus. Excepturi.",
//     stars: 5
// },
// {
//     title:"React > Revolução do Front",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos accusamus hic eius numquam blanditiis tempora, obcaecati consectetur quod repellendus porro soluta! At id maxime voluptatem sit consectetur ducimus. Excepturi."
// }