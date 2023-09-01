const {join} = require('path')
const {readFileSync, rmSync, writeFileSync, writeFile} = require('fs');


const booksFilePath = join(__dirname, 'db', 'db','books.json');
const log = console.log


module.exports =  (function requestMethods(){

    const books = readFileSync(booksFilePath,'utf8')
    const parsedBooks = JSON.parse(books);
    //Get book function

    const getBooks = (req, res) =>  {
       res.writeHead(200);
       return res.end(books);
    }

    //Post New Book Function

    const postNewBook = (req, res) => {
        let data = [];
        res.writeHead(201, 'New Book Added to library');
        req.on('data', chunk => {
            data.push(chunk)
        })
        req.on('close', () => {
            data = JSON.parse(data);
            data.id = parsedBooks.length + 1;
            parsedBooks.push(data)
            writeFile(booksFilePath, JSON.stringify(parsedBooks), err => {
                if (err) {
                    log(err);
                    return;
                }
                return res.end(JSON.stringify(parsedBooks))
            })
            
        })
      
    }

    const updateBook = (req, res) => {
        res.writeHead(201, 'Book Updated Successfully.')
        let data = [];

        req.on('data', chunk => {
            log('Book Updated Successfully.');
            data.push(chunk)
        })

        req.on('close', () => {
            data = JSON.parse(data);
            const updatedBook = parsedBooks.map(book => {
                return book.id === data.id ? Object.assign({}, book, data) : book;
            })
            writeFile(booksFilePath, JSON.stringify(updatedBook), () =>  {
                return res.end(JSON.stringify(updatedBook));
            })
        })



    }

    const deleteBook = (req, res) => {
        let data = [];

        req.on('data', c => {
            data.push(c);
        })
        req.on('close', () => {
            data = JSON.parse(data);
            const filterBooks = parsedBooks.filter(book => book.id !== data.id)
            writeFile(booksFilePath, JSON.stringify(filterBooks), () => {
                return res.end(JSON.stringify(filterBooks));
            })
            
        })

    }



    return {
        getBooks,
        postNewBook,
        updateBook,
        deleteBook
    }
}())