const {open, readFile} = require('fs')
const {join} = require('path')

const pathToFile = join(__dirname, 'files/poem.txt')
const log = console.log


open(pathToFile, (err, fileDescriptor) => {
    if (err) {
        log(err);
        return;
    }

    
    readFile(fileDescriptor,'utf8', (err, data) => {
        if (err) {
            log(err)
            return;
        }
        log(data)
    })
})