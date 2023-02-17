// inserting data in MongoDB

const dbConnect = require('./18mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            {name: 'ram', email: 'ramji@ram.com'},
            {name: 'shyam', email: 'ramji@ram.com'}
        ]
    );
    if(result.acknowledged) {
        console.log("data inserted");
    }
}
insert();
