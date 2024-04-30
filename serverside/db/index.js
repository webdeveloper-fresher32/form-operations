const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/formvalidation");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Unable to connect to MongoDB:", error);
    }
}

const conn = mongoose.connection;

module.exports = {
    conn,
    connect
}
