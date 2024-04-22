const express = require('express')
const hotelRouter = express.Router()
const {
  getAllHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
} = require('../controller/hotel')
const upload = require('../middleware/file')
const { isAdmin } = require('../middleware/admin')

hotelRouter.get('/', getAllHotels)
hotelRouter.get('/:id', getHotelById)
hotelRouter.post('/', [isAdmin], upload.single('hotelImg'), createHotel)
hotelRouter.put('/:id', [isAdmin], upload.single('hotelImg'), updateHotel)
hotelRouter.delete('/:id', [isAdmin], deleteHotel)

module.exports = hotelRouter
