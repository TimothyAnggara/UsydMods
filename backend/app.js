const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const userRoutes = require("./routes/user")

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/user', userRoutes)

function server() {
    db()
    app.listen(PORT, ()=>{
        console.log("Listening to port", PORT);
    })
}

server()