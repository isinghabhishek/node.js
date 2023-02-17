// Delete Data from MongoDB

const dbConnect = require('./18mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = data.deleteOne({})
    console.warn(result);
}

deleteData();