const express = require('express')
const excursionRouter = express.Router()
const {
  getAllExcursions,
  getExcursionById,
  createExcursion,
  deleteExcursion,
  updateExcursion
} = require('../Controller/excursion')
const { isAuth } = require('../Middleware/auth')

excursionRouter.get('/', getAllExcursions)
excursionRouter.get('/:id', getExcursionById)
excursionRouter.post('/', [isAuth], createExcursion)
excursionRouter.put('/:id', [isAuth], updateExcursion)
excursionRouter.delete('/:id', [isAuth], deleteExcursion)

module.exports = excursionRouter
