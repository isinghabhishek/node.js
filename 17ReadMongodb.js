// Reading data from MongoDB to Node js

const dbConnect = require('./18mongodb')

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     })
// })
// console.warn(dbConnect());
// Promise

const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();