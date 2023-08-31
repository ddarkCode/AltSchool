const {rm} = require('fs');
const {join} = require('path');

const log = console.log;

const fileToBeDeletedPath = join(__dirname, 'files', 'fileToBeDeleted.txt');

rm(fileToBeDeletedPath, err => {
    if (err) {
        log(`An Error Occurred while deleting filem ${err}`);
        return;
    }
    log('File Deleted Successfully.')
})
