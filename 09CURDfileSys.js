// CURD with file system

// Make file
// Read file
// Update file
// Rename file
// Delete file

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// making file
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a test data file');

// reading the file data
// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item);
// })

// updating the file
// if we run multiple time it will update file with same content
// fs.appendFile(filePath, ' and the file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated")
// })

// renaming file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("file is updated")
// })

// deleting file
fs.unlinkSync(`${dirPath}/fruit.txt`);

// What is Buffer?
// Buffer is a temporary memory location
// node js ko operation perform karne ke liye todeshi memory chahie hote hai