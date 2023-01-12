
const express = require('express');

const router = express.Router();

const IbookController = require('../controllers/ibookController.js')


router.get('/all', IbookController.getAllIbook)
router.post('/create', IbookController.createEntry)
router.get('/:id', IbookController.getSingleIbookById)
router.put('/:id', IbookController.updateIbookByID)
router.delete('/:id', IbookController.deleteIbookByID)


module.exports = router