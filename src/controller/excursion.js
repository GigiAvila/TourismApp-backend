const {
  getAllExcursionsFromDB,
  getExcursionByIdFromDB,
  createExcursionInDB,
  deleteExcursionFromDB,
  updateExcursionByIdInDB
} = require('../repositories/excursion')

const { setError } = require('../config/error')

const getAllExcursions = async (req, res, next) => {
  try {
    const { filter } = req.query
    const excursions = await getAllExcursionsFromDB(filter)
    res.status(200).json({ data: excursions })
  } catch (error) {
    return next(setError(400, "Can't find excursions"))
  }
}

const getExcursionById = async (req, res, next) => {
  try {
    const { id } = req.params
    const excursion = await getExcursionByIdFromDB(id)
    res.status(200).json({ data: excursion })
  } catch (error) {
    return next(setError(400, "Can't find excursion"))
  }
}

const createExcursion = async (req, res, next) => {
  try {
    const newExcursion = await createExcursionInDB({
      name: req.body.name,
      users: req.body.users,
      language: req.body.language,
      cancelation: req.body.cancelation,
      description: req.body.description,
      duration: req.body.duration,
      excursionImg: req.file.path
    })
    res.status(201).json({ data: newExcursion })
  } catch (error) {
    return next(setError(201, "Can't create excursion"))
  }
}

const deleteExcursion = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteExcursionFromDB(id)

    res.status(200).json({
      data: `The excursion with de id ${id} has been deleted successfully`
    })
  } catch (error) {
    return next(setError(201, "Can't delete excursion"))
  }
}

const updateExcursion = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, users, description, duration, cancelation, language, price } =
      req.body
    const excursionImg = req.file ? req.file.path : undefined

    const excursionUpdateData = {
      name,
      users,
      excursionImg,
      description,
      duration,
      cancelation,
      language,
      price
    }

    const excursion = await updateExcursionByIdInDB(id, excursionUpdateData)

    res.status(200).json({ data: excursion })
  } catch (error) {
    next(setError(400, "Can't update excursion"))
  }
}

module.exports = {
  getAllExcursions,
  getExcursionById,
  createExcursion,
  deleteExcursion,
  updateExcursion
}
