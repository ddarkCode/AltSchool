const {mkdir, rmdir, rename, readdir} = require('fs');
const {join} = require('path');

const log = console.log
const folderPath = join(__dirname, 'folderToWorkWith');

// mkdir(folderPath, err => {
//     if (err) {
//         log(err);
//         return;
//     }
//     log('Folder Created successfully.')
// })

readdir(folderPath, 'utf8', (err, contents) => {
    if (err) {
        log(err);
        return;
    }
    log(`File Contents read successfully \n ${contents}`);
})

