// Show File List
// making files in a folder
// use path module
// get file names and print

// fs -> file System
const fs = require('fs')

const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.warn(dirPath);

for(i=0; i<5; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple test file");
    //fs.writeFileSync(`hello${i}.txt`,"a simple test file");
}

fs.readdir(dirPath, (err, files)=>{
    //console.log(files)
    files.forEach((item) => {
        console.log("files name is" +item);
    })
})