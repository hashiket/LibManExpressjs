const UserModel = require('../models/user.js')

class UserController{
    static createUser = async (req, res) =>{
        try {
            const doc = new UserModel(req.body)
            
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static getAllUser = async (req, res) =>{
        try {
            const result = await UserModel.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
        
    }
    static getSingleUserById = async (req, res) =>{
        try {
            const result = await UserModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
   
    static updateUserByID = async (req, res) =>{
        try {
            const result = await UserModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)

        } catch (error) {
            console.log(error)
        }
    }
    static deleteUserByID = async (req, res) =>{
        try {
            const result = await UserModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = UserController