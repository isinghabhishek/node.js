// Mongoose
// What is Mongoose?

// CURD Operation on dataBase Using  Mongoose?

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejs');

    const ProductSchema = new mongoose.Schema({
        name: String,
        prices:Number,
        brand:String,
        Category:String
    });

// 1). Adding data in MongoDB
const saveInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = new Product({name: "rithivi", 
    prices: 200,
    brand:'singh',
    category:'Interprices'});
    let result = await data.save();
    console.log(result);
}
saveInDB();


// 2). Updating data in dataBase
const updateInDB = async () => {
    const Product = mongoose.model('tutorials', ProductSchema);
    let data = await Product.updateOne(
        {name: "rithivi"},
        {
            $set: {prices: 500}
        }
    )
    console.log(data);
}
//updateInDB();

// delete data in dataBase
const deleteINDB = async () => {
    const Product = mongoose.model('tutorials', ProductSchema);
    let data = await Product.deleteOne({name: 'rithivi'});
    console.log(data);
}
//deleteINDB();


// find data in dataBase
const findINDB = async () => {
    const Product = mongoose.model('tutorials', ProductSchema);
    let data = await Product.find();
    console.log(data);
}
findINDB();