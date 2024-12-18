const { MongoClient } = require("mongodb");
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require("dotenv").config();
const userRoute = require("./routes/userController");
const connectDB = require("./db/connect");
const port = 5000

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended : false}));

app.use("/users", userRoute);

const initServer = async() => {
    try {
        await connectDB('mongodb+srv://classUser:f7hfHsmWx0Jqzmiw@task-manager-practice.zgtdo.mongodb.net/word-game');
        app.listen(port, () => {
            console.log("Listening on port 5000");
        })
    } catch(err) {
        console.log(err);
    }
}
initServer();
