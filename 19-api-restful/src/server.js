const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

const app = express()

// const allowedOrigins = [
//     'end 1',
//     'end 2',
//     'end 3'
// ]

db.connect()
// app.use(cors({
//     origin: function(origin, callback){
//         let allowed = true

//         if(!origin){allowed = true}
//         if(!allowedOrigins.includes(origin)){allowed = false}

//         callback(null, allowed)
//     }
// }))

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 1992
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))