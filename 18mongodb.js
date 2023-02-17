// Connecting Node with MongoDB 

const { MongoClient } =  require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'nodejs';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    db = result.db(dbName)
    return  db.collection('tutorial');
}
// The dbConnect function should be exported directly, rather than the result of calling the function.
module.exports = dbConnect;

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'nodejs';
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// async function dbConnect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     const db = client.db(dbName);
//     return db.collection('tutorial');
//   } catch (error) {
//     console.error(error);
//   }
// }

// module.exports = dbConnect;

