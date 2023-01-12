const express = require('express');

const router = express.Router();

const BookController = require('../controllers/bookController.js')



router.get('/', BookController.getAllDoc)
router.post('/', BookController.createDoc)
router.get('/:id', BookController.getSingleDocById)
router.put('/:id', BookController.updateDocByID)
router.delete('/:id', BookController.deleteDocByID)

module.exports = router