const express = require('express')
const cityRouter = express.Router()
const {
  getAllCities,
  getCityById,
  createCity,
  deleteCity,
  updateCity
} = require('../Controller/city')
const { isAdmin } = require('../Middleware/admin')
const uploadMiddleware = require('../Middleware/file')

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
