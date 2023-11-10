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
const upload = require('../Middleware/file')

excursionRouter.get('/', getAllExcursions)
excursionRouter.get('/:id', getExcursionById)
excursionRouter.post(
  '/',
  [isAdmin],
  upload.single('excursionImg'),
  createExcursion
)
excursionRouter.put(
  '/:id',
  [isAdmin],
  upload.single('excursionImg'),
  updateExcursion
)
excursionRouter.delete('/:id', [isAdmin], deleteExcursion)

module.exports = excursionRouter
