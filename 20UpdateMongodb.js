

const dbConnect = require('./18mongodb');

const updateData = async () => {
    let data = await dbConnect();
    // for multiple use update();
    let result = await data.updateOne(
        {name: 'abhishek'}, {
            $set: {name: 'Abhi Singh'}
        }
    );
    console.warn(result);
}

updateData();