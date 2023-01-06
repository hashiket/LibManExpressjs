const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    pages:{type:Number}
})


const BookModel = mongoose.model("student", bookSchema)

module.exports = BookModel
