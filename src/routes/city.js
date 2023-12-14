const express = require('express')
const cityRouter = express.Router()
const {
  getAllCities,
  getCityById,
  createCity,
  deleteCity,
  updateCity
} = require('../controller/city')
const { isAdmin } = require('../middleware/admin')
const uploadMiddleware = require('../middleware/file')

cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', [isAdmin], uploadMiddleware.single('cityImg'), createCity)
cityRouter.put(
  '/:id',
  [isAdmin],
  uploadMiddleware.single('cityImg'),
  updateCity
)
cityRouter.delete('/:id', [isAdmin], deleteCity)

module.exports = cityRouter
