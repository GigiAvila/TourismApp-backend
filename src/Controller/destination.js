const {
  getAllDestinationsFromDB,
  getDestinationByIdFromDB,
  createDestinationInDB,
  deleteDestinationFromDB
} = require('../Repositories/destination.js')
const { setError } = require('../Config/error')

const getAllDestinations = async (req, res, next) => {
  try {
    const { filter } = req.query
    const destinations = await getAllDestinationsFromDB(filter)
    res.status(200).json({ data: destinations })
  } catch (error) {
    return next(setError(400, "Can't find destinations"))
  }
}

const getDestinationById = async (req, res, next) => {
  try {
    const { id } = req.params
    const destination = await getDestinationByIdFromDB(id)
    res.status(200).json({ data: destination })
  } catch (error) {
    return next(setError(400, "Can't find destination"))
  }
}

const createDestination = async (req, res, next) => {
  try {
    const newDestination = await createDestinationInDB({
      country: req.body.country
    })
    res.status(201).json({ data: newDestination })
  } catch (error) {
    return next(setError(400, "Can't create destination"))
  }
}

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteDestinationFromDB(id)

    res.status(200).json({
      data: `The destination with de id ${id} has been deleted successfully`
    })
  } catch (error) {
    return next(setError(201, "Can't delete destination"))
  }
}

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  deleteDestination
}
