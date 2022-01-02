const mongoClient = require('mongodb').MongoClient


let client;

const dbConnection = async () => {
    client = await mongoClient.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const getConnection = (name) => {
    const db = client.db(name)
    return db;
}

module.exports = {
    dbConnection,
    getConnection
}