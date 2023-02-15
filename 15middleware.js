// Middleware

// What are Middlewares?
//
// Middleware Types
// 1. Application-level middleware(global)
// 2. Router-level middleware(single, group, global)
// 3. Error-handling middleware
// 4. Build-in middleware
// 5. Third-party middleware

const express = require('express');
const reqFilter = require('./15middlewareTWO');
const app = express();
const route = express.Router();

//app.use(reqFilter); // application-level middleware
route.use(reqFilter)

app.get('/', (req, resp)=>{
    resp.send('Welcome to Home Page');
})

// middleware on single Route
app.get('/users', (req, resp)=>{
    resp.send('Welcome to users Page')
});

// Route level Middleware
// using route.get
// for applying middleware
route.get('/about', (req, resp)=>{
    resp.send('Welcome to About Page')
});

route.get('/contact', (req, resp)=>{
    resp.send('Welcome to Contact Page')
});
app.use('/', route);

app.listen(3000);