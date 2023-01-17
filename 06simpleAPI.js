
const http = require('http');
const data = require('./06data');
http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4000);

// Makeing a simple API
// make a server
// create header and API body.
// create an API with static data.
// put data in another file.