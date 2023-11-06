const {
  getAllUsersFromDB,
  getUserByIdFromDB,
  createUserInDB,
  deleteUserFromDB,
  updateUserByIdInDB
} = require('../Repositories/user')
const { setError } = require('../config/error')

const getAllUsers = async (req, res, next) => {
  try {
    const { filter } = req.query
    const users = await getAllUsersFromDB(filter)
    res.status(200).json({ data: users })
  } catch (error) {
    return next(setError(400, "Can't find users"))
  }
}

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await getUserByIdFromDB(id)
    res.status(200).json({ data: user })
  } catch (error) {
    return next(setError(400, "Can't find user"))
  }
}

const createUser = async (req, res, next) => {
  try {
    const { name, surname, country, email, selection } = req.body

    const newUser = await createUserInDB({
      name,
      surname,
      country,
      email,
      selectedCity: selection.cityId,
      selectedHotel: selection.hotelId,
      selectedExcursions: selection.excursionId
    })

    res.status(201).json({ data: newUser })
  } catch (error) {
    next(setError(400, "Can't create user"))
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    await deleteUserFromDB(id)

    res.status(200).json({
      data: `The user with de id ${id} has been deleted successfully`
    })
  } catch (error) {
    return next(setError(400, "Can't delete user"))
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, surname, country, email, selection } = req.body

    const userUpdateData = {
      name,
      surname,
      country,
      email,
      selection: {
        city: selection.city,
        hotel: selection.hotel,
        excursion: selection.excursion
      }
    }

    const user = await updateUserByIdInDB(id, userUpdateData)

    res.status(200).json({ data: user })
  } catch (error) {
    next(setError(400, "Can't update user"))
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
}
