// Input from Command Line

// argv -> argument vector

// console.log(process.argv);
// i/p -> node .\07InputFromCommandLine.js Hello, Abhishek
// o/p -> 'C:\\Program Files\\nodejs\\node.exe',  --> Node ke file jis directory save hai hus ka location
//          'D:\\NodeJS\\07InputFromCommandLine.js', --> jis directory se file run horahi hai
//          'Hello',
//          'Abhishek'

// console.log(process.argv[2]);
// i/p -> node .\07InputFromCommandLine.js Hello, Abhishek
// o/p --> Hello

// creating a file in console
const fs = require('fs');

const input = process.argv;
// fs.writeFileSync(input[2], input[3])

if(input[2] == 'add') { // node .\07InputFromCommandLine.js add data.txt 'this is data'
    fs.writeFileSync(input[3], input[4])
}else if(input[2] == 'remove') {  // node .\07InputFromCommandLine.js remove add
    fs.unlinkSync(input[3])
}else {
    console.log("invalid output")
}

//                                     input[2]   input[3]      input[4]
// // node .\07InputFromCommandLine.js   add     data.txt    'this is data'
