const {createServer} = require('http');

const {getBooks, postNewBook, updateBook, deleteBook} = require('./requestMethod')

const log = console.log
const PORT = 3000;
const HOSTNAME = 'localhost';

function requestHandler(req, res)  {
    if (req.url === '/books' && req.method === 'GET') {
        getBooks(req, res)
    } else if (req.url === '/books' && req.method === 'POST') {
        postNewBook(req, res);
    } else if (req.url === '/books' && req.method === 'PUT') {
        updateBook(req, res);
    } else if (req.url === '/books' && req.method === 'DELETE') {
        deleteBook(req, res);
    }
}


const server = createServer(requestHandler);





server.listen(PORT, HOSTNAME, () => {
    log(`Server is running on ${HOSTNAME}:${PORT}`)
})