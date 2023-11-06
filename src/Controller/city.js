const {
  getAllCitiesFromDB,
  getCityByIdFromDB,
  createCityInDB,
  deleteCityFromDB,
  updateCityByIdInDB
} = require('../Repositories/city')

const { setError } = require('../config/error')

const getAllCities = async (req, res) => {
  try {
    const { filter } = req.query
    const cities = await getAllCitiesFromDB(filter)
    res.status(200).json({ data: cities })
  } catch (error) {
    return next(setError(400, "Can't find cities"))
  }
}

const getCityById = async (req, res) => {
  try {
    const { id } = req.params
    const city = await getCityByIdFromDB(id)
    res.status(200).json({ data: city })
  } catch (error) {
    return next(setError(400, "Can't find city"))
  }
}

const createCity = async (req, res, next) => {
  try {
    const newCity = await createCityInDB({
      name: req.body.name,
      users: req.body.users
    })
    res.status(201).json({ data: newCity })
  } catch (error) {
    return next(setError(400, "Can't create city"))
  }
}

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params
    await deleteCityFromDB(id)

    res.status(200).json({
      data: `The city with de id ${id} has been deleted successfully`
    })
  } catch (error) {
    return next(setError(201, "Can't delete city"))
  }
}

const updateCity = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, users } = req.body

    const cityUpdateData = {
      name,
      users
    }

    const city = await updateCityByIdInDB(id, cityUpdateData)

    res.status(200).json({ data: city })
  } catch (error) {
    next(setError(400, "Can't update city"))
  }
}

module.exports = {
  getAllCities,
  getCityById,
  createCity,
  deleteCity,
  updateCity
}
