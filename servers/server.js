const http = require('http');

const log = console.log


const requestHandler = (req,  res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200)
    res.write('This is the response from the server.\n')
    res.write('This is the response from the server.\n')
    res.write('This is the response from the server.\n')
    res.write('This is the response from the server.\n')
    res.write('This is the response from the server.\n')
    res.end('This is the end of the response.')
}

const server =  http.createServer(requestHandler)

server.listen(3000, 'localhost', () =>  {
    log(`Server is running on port ${3000}`)
})