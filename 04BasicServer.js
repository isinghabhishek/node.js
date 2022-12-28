// Making basic server in Nodejs

const http = require('http');

// const dataControl = (req, resp) => {
//     resp.write("<h1>Hello, This is Abhishek Singh</h1>")
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);

http.createServer((req, resp) => {
    resp.write("<h1>Hello, This is Abhishek Singh</h1>")
    resp.end();
}).listen(4500);