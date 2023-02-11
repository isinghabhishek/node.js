// Express JS

// Express jS is framework of NodeJS
const express = require('express');
const app = express();

// creating basic page 
// Rounting with ExpressJS
// Rendering HTML and JSON
app.get('', (req, resp) => {
    //console.log("data sent by browser =>>", req.query.name) // use to get data that pass throught browser
    resp.send(`
    <h1>Hello, This is Home Page</h1>
    <a href="/about" >Go to About Page</a>
    `);
});

app.get('/about', (req, resp) => {
    resp.send(`
    <input type="text" placeholder="User Name" value="${req.query.name}"/>  
    <button>Click</button>
    <a href="/" >Go to Home Page</a>
    `);
});

app.get('/help', (req, resp) => {
    resp.send([
    {
        name:'abhishek',
        email:'abhishek@singh.com'
    },
    {
        name:'prithivi',
        email:'raj@gmail.com'
    }
  ]);
}), app.listen(4500);

// value="${req.query.name}"
// taking query parameter data using above stmt