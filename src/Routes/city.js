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

cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', [isAdmin], createCity)
cityRouter.put('/:id', [isAdmin], updateCity)
cityRouter.delete('/:id', [isAdmin], deleteCity)

module.exports = cityRouter
