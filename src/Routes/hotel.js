const express = require('express')
const hotelRouter = express.Router()
const {
  getAllHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
} = require('../Controller/hotel')

hotelRouter.get('/', getAllHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', createHotel)
hotelRouter.put('/:id', updateHotel)
hotelRouter.delete('/:id', deleteHotel)

module.exports = hotelRouter
