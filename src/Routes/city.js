const express = require('express')
const cityRouter = express.Router()
const {
  getAllCities,
  getCityById,
  createCity,
  deleteCity,
  updateCity
} = require('../Controller/city')

cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', createCity)
cityRouter.put('/:id', updateCity)
cityRouter.delete('/:id', deleteCity)

module.exports = cityRouter
