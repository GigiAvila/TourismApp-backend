const express = require('express')
const excursionRouter = express.Router()
const {
  getAllExcursions,
  getExcursionById,
  createExcursion,
  deleteExcursion,
  updateExcursion
} = require('../controller/excursion')
const { isAdmin } = require('../middleware/admin')
const upload = require('../middleware/file')

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
