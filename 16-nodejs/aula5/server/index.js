const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const url = req.url

    if(url === '/'){
        const html = fs.readFileSync('../client/index.html', {encoding:"utf8"})

        return res.end(html)
    }

    // return res.end('Hello World!')
})

server.listen(1992)