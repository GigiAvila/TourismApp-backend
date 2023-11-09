const express = require('express')
const hotelRouter = express.Router()
const {
  getAllHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
} = require('../Controller/hotel')

const { isAdmin } = require('../Middleware/admin')

hotelRouter.get('/', getAllHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', [isAdmin], createHotel)
hotelRouter.put('/:id', [isAdmin], updateHotel)
hotelRouter.delete('/:id', [isAdmin], deleteHotel)

module.exports = hotelRouter
