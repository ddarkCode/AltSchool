const http = require('http');

const {books, authors} = require('./fixtures')

const log = console.log


const requestHandler = (req,  res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200)
    
   switch (req.url) {
    case '/':
        return res.end('Welcome To The Home Page.')
    case '/books':
        return res.end(JSON.stringify(books))
        
    case '/authors':
        return res.end(JSON.stringify(authors))
   
    default:
        return res.end('Request Not Found.')
   }
}

const server =  http.createServer(requestHandler)

server.listen(3000, 'localhost', () =>  {
    log(`Server is running on port ${3000}`)
})