
const express = require('express');

const router = express.Router();
const UserController = require('../controllers/userController.js')


router.get('/all', UserController.getAllUser)
router.post('/create', UserController.createUser)
router.get('/:id', UserController.getSingleUserById)
router.put('/:id', UserController.updateUserByID)
router.delete('/:id', UserController.deleteUserByID)


module.exports = router