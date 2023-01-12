const mongoose = require('mongoose')


const ibookSchema = new mongoose.Schema({
    book_id:{type:String, unique: true},
    user_id:{type:String},
})


const IbookModel = mongoose.model("issuebook", ibookSchema)

module.exports = IbookModel

