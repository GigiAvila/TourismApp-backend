const express = require('express')
const cityRouter = express.Router()
const {
  getAllCities,
  getCityById,
  createCity,
  deleteCity,
  updateCity
} = require('../Controller/city')
const { isAuth } = require('../Middleware/auth')

cityRouter.get('/', getAllCities)
cityRouter.get('/:id', getCityById)
cityRouter.post('/', [isAuth], createCity)
cityRouter.put('/:id', [isAuth], updateCity)
cityRouter.delete('/:id', [isAuth], deleteCity)

module.exports = cityRouter
