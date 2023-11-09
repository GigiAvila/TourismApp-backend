const express = require('express')
const excursionRouter = express.Router()
const {
  getAllExcursions,
  getExcursionById,
  createExcursion,
  deleteExcursion,
  updateExcursion
} = require('../Controller/excursion')
const { isAdmin } = require('../Middleware/admin')

excursionRouter.get('/', getAllExcursions)
excursionRouter.get('/:id', getExcursionById)
excursionRouter.post('/', [isAdmin], createExcursion)
excursionRouter.put('/:id', [isAdmin], updateExcursion)
excursionRouter.delete('/:id', [isAdmin], deleteExcursion)

module.exports = excursionRouter
