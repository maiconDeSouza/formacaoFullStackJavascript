const express = require('express')
const app = express()


app.use('/', (req, res) =>{
    res.send('Olá Maicon!')
})


const port = process.env.port || 7981
app.listen(port, () => console.log(`Server is listening on port ${port}`))