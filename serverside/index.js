const express = require('express');
const app = express();
const db = require('./db/index');
const userroute=require('./routes/registeruser.js')
const loginroute=require("./controllers/logincontroller.js")
const cors=require('cors')

// middlewares
app.use(express.json());
app.use(cors())
app.use("/", userroute);


db.connect();

app.get("/", (req, res) => {
    res.send("Hello World");
})


app.listen(8000, () => {
    console.log("server is running on port 8000");
})