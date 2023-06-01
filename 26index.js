// Post API with NodeJS and Mongoose

const express = require('express');
require('./24api');

const Product = require('./25product');

// inserting data to dataBase
const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    //console.log(result);
    res.send(result);
});

// getting data to dataBase
app.get("/list", async(req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

// deleting data to dataBase
app.delete("/delete/:_id", async(req, resp) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

// deleting data to dataBase
app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(data);
})

// searching data in dataBase
app.get("/search/:key", async (req, resp) => {
    let data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"prices":{$regex:req.params.key}}
            ]
        }
    );
    resp.send(data);
})
app.listen(5000);