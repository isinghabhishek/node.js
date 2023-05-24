// Get API with MongoDB and Nodejs
// Get --> Read method

const express = require('express');
const dbConnect = require('./18mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

// POST Api with nodejs and MongoDB
// entering data into databases using POST API
app.post('/', async (req, resp) => {
    // console.log(req.body);
    let data = await dbConnect();
    let result = await data.insert(req.body);
    resp.send(result);
});

// PUT Api with nodejs and MongoDB
app.put('/', async (req, resp) => {
    // console.log(req.body);
    let data = await dbConnect();
    let result = data.updateOne(
        {name: "shelly"},
        {$set:{email : "abhishek@singh.com"}}
    )
    resp.send({result: "update"});
});

// NodeJS Delete API Method

app.delete("/:id", async (req, resp) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result);
})
app.listen(5000);

// Can we body with get method --> No