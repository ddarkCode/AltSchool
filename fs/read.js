const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './files/countries.json');
const log = console.log

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        log(err);
        return
    }
    log(data)
    return data;
})