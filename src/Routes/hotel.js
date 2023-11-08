const express = require('express')
const hotelRouter = express.Router()
const {
  getAllHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
} = require('../Controller/hotel')
const { isAuth } = require('../Middleware/auth')

hotelRouter.get('/', getAllHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', [isAuth], createHotel)
hotelRouter.put('/:id', [isAuth], updateHotel)
hotelRouter.delete('/:id', [isAuth], deleteHotel)

module.exports = hotelRouter
