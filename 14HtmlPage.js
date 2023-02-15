// 20. Making HTML pages in Node JS


// path module--> helps in acssecing projects folder ko acsses karne me madath kar tha hai
// static method --> use to load static content
// css can not be load using 'static' 
// path hamara index.js se ho ke jaa tha hai(path node js se ho ke aatah hai)

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

// app.listen(4500);


// 21. Remove File extension
// Remove an extension from URL --> sendFile()

// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');
// // app.use(express.static(publicPath));

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help', (req, resp) => {
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/pageNotFound.html`)
// })

// app.listen(4500);


// 22).Templete Engine
// Embedded JavaScript Templates
// ejs --> effective 

// Dynamic Page in node js

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

// template engine ejs
app.get('/profile', (req, resp) => {
    const user={
        name:'Abhishek Singh',
        email: 'abhishek@test.com',
        city: 'Delhi',
        skills: ['java', 'javaScript', 'reactjs']
    }
    resp.render('profile', {user});
});

app.get('/login', (_,resp)=>{
    resp.render('login')
})

app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});
app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/pageNotFound.html`)
});

app.listen(4500);