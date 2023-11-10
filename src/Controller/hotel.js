const {
  getAllHotelsFromDB,
  getHotelByIdFromDB,
  createHotelInDB,
  deleteHotelFromDB,
  updateHotelByIdInDB
} = require('../Repositories/hotel')

const { setError } = require('../config/error')

const getAllHotels = async (req, res, next) => {
  try {
    const { filter } = req.query
    const hotels = await getAllHotelsFromDB(filter)
    res.status(200).json({ data: hotels })
  } catch (error) {
    return next(setError(400, "Can't find hotels"))
  }
}

const getHotelById = async (req, res, next) => {
  try {
    const { id } = req.params
    const hotel = await getHotelByIdFromDB(id)
    res.status(200).json({ data: hotel })
  } catch (error) {
    return next(setError(400, "Can't find hotel"))
  }
}

const createHotel = async (req, res, next) => {
  try {
    const newHotel = await createHotelInDB({
      name: req.body.name,
      users: req.body.users,
      hotelImg: req.file.path
    })
    res.status(201).json({ data: newHotel })
  } catch (error) {
    return next(setError(400, "Can't create hotel"))
  }
}

const deleteHotel = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteHotelFromDB(id)

    res.status(200).json({
      data: `The hotel with de id ${id} has been deleted successfully`
    })
  } catch (error) {
    return next(setError(201, "Can't delete hotel"))
  }
}

const updateHotel = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, users } = req.body
    const hotelImg = req.file ? req.file.path : undefined

    const hotelUpdateData = {
      name,
      users,
      hotelImg
    }

    const hotel = await updateHotelByIdInDB(id, hotelUpdateData)

    res.status(200).json({ data: hotel })
  } catch (error) {
    next(setError(400, "Can't update hotel"))
  }
}

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
}
