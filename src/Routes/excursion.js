const express = require('express')
const excursionRouter = express.Router()
const {
  getAllExcursions,
  getExcursionById,
  createExcursion,
  deleteExcursion,
  updateExcursion
} = require('../Controller/excursion')

excursionRouter.get('/', getAllExcursions)
excursionRouter.get('/:id', getExcursionById)
excursionRouter.post('/', createExcursion)
excursionRouter.put('/:id', updateExcursion)
excursionRouter.delete('/:id', deleteExcursion)

module.exports = excursionRouter
