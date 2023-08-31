const {writeFile, readFileSync} = require('fs')
const {join} = require('path');


const log = console.log;
const wolfPack = join(__dirname, 'files', 'fileToBeDeleted.txt');
const poemFilePath = join(__dirname, 'files', 'poem.txt');

const poemContent = readFileSync(poemFilePath, 'utf8');

// log(poemContent);

writeFile(wolfPack, poemContent, err => {
    if (err) {
        log(err);
        return;
    }
    log('poem Content written to the new created file.');
})

