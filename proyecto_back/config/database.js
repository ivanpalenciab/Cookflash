const mongoose = require ("mongoose");

const host =  "127.0.0.1";
const port = "27017";
const db = "cookflash";

exports.mongoConnect = () => {
	const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, "Mongodb conection error"))

}