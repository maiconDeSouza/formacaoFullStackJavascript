const mongoose = require('mongoose')



function connect(){
    // mongoose.set('useNewUrlParser', true)
// mongoose.set('useUnifiedTopology', true)

mongoose.connect('mongodb://localhost:27017/ipi-restful')

const db = mongoose.connection

db.once('open', () =>{
    
    console.log(`Connected to database`)
})

db.on('error', console.error.bind(console, 'error'))
}

module.exports = {
    connect
}