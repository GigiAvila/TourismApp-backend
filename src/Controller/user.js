const User = require('../Model/user')
const bcrypt = require('bcrypt')
const {
  getAllUsersFromDB,
  getUserByIdFromDB,
  registerUserInDB,
  loginUserInDB,
  deleteUserFromDB,
  updateUserByIdInDB
} = require('../Repositories/user')
const { setError } = require('../config/error')

const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersFromDB()
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

const registerUser = async (req, res, next) => {
  try {
    const { name, surname, country, email, selection, userName, password } =
      req.body

    const hashedPassword = bcrypt.hashSync(password, 10)

    const newUser = await registerUserInDB({
      name,
      surname,
      country,
      email,
      userName,
      password: hashedPassword,
      selection: {
        city: selection.city,
        hotel: selection.hotel,
        excursion: selection.excursion
      }
    })

    if (newUser) {
      res.status(201).json({ data: newUser })
    } else {
      if (password && !passwordRegex.test(password)) {
        res.status(400).json({ error: 'Invalid password format' })
      } else {
        res.status(400).json({ error: 'User already exists' })
      }
    }
  } catch (error) {
    console.log(error)
    next(setError(400, "Can't register new user"))
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body

    const loginData = {
      userName,
      password
    }

    let loginSuccessful = false
    const userIsLoggedIn = await loginUserInDB(loginData)

    if (userIsLoggedIn) {
      loginSuccessful = true

      res.status(200).json({ data: 'User is now logged in' })
    }

    if (!loginSuccessful) {
      res
        .status(401)
        .json({ error: 'Authentication failed. Passwords do not match.' })
    }
  } catch (error) {
    return next(setError(400, "Can't login "))
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  registerUser,
  loginUser
}
