const express = require('express')
const app = express()
const connectDB = require("./db/connectdb.js")
const web = require('./routes/web.js')
const user = require('./routes/user1.js')
const ibook = require('./routes/ibook.js')


const port  = process.env.PORT || '3000'

const mongoose  = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017"

connectDB(DATABASE_URL);

app.use(express.json())

app.use("/book", web)
app.use("/user", user)
app.use('/issuebook', ibook)
app.listen(port, ()=>{
    console.log('Server listening at http://localhost:3000')
})