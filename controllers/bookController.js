const BookModel = require('../models/book.js')

class BookController{
    static createDoc = async (req, res) =>{
        try {
            const {name, price, pages}= req.body
            //const doc = new BookModel(req.body)
            const doc = new BookModel({
                name:name,
                price:price,
                pages:pages
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) =>{
        try {
            const result = await BookModel.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
        
    }
    static getSingleDocById = async (req, res) =>{
        try {
            const result = await BookModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
   
    static updateDocByID = async (req, res) =>{
        try {
            const result = await BookModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)

        } catch (error) {
            console.log(error)
        }
    }
    static deleteDocByID = async (req, res) =>{
        try {
            const result = await BookModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = BookController