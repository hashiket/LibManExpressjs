const IbookModel = require('../models/bookissue.js')

class IbookController{
    static createEntry = async (req, res) =>{
        try {
            const {book_id, user_id}= req.body
            //const doc = new BookModel(req.body)
            const doc = new IbookModel({
                book_id:book_id,
                user_id:user_id
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static getAllIbook = async (req, res) =>{
        try {
            const result = await IbookModel.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
        
    }
    static getSingleIbookById = async (req, res) =>{
        try {
            const result = await IbookModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
   
    static updateIbookByID = async (req, res) =>{
        try {
            const result = await IbookModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)

        } catch (error) {
            console.log(error)
        }
    }
    static deleteIbookByID = async (req, res) =>{
        try {
            const result = await IbookModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = IbookController