const {mkdir, rmdir,rm,rename, readdir} = require('fs');
const {join} = require('path');

const log = console.log
const folderPath = join(__dirname, 'folderToWorkWith');
const newFolderPath = join(__dirname, 'files','newFolderToWorkWith');

// mkdir(folderPath, err => {
//     if (err) {
//         log(err);
//         return;
//     }
//     log('Folder Created successfully.')
// })

// readdir(folderPath, 'utf8', (err, contents) => {
//     if (err) {
//         log(err);
//         return;
//     }
//     log(`File Contents read successfully \n ${contents}`);
// })


// rename(newFolderPath, folderPath, () => {
   
//     log('Folder renamed successfully.')
// })

// rmdir(folderPath,{recursive: true}, err => {
//     if (err) {
//         log(err);
//         return;
//     }
//     log('Folder deleted successfully.')
// })

//Due to deprecation warning using rmdir to deleted non empty file is not recommended so i will use fs.rm instead


// rm(folderPath, {recursive:true}, err => {
//     if (err) {
//         log(err);
//         return;
//     }
//     log('Folder deleted successfully.')
// })