const express = require('express')
const userRouter = express.Router()
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  registerUser,
  loginUser
} = require('../Controller/user')
const { isAuth } = require('../Middleware/auth')

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/register', [isAuth], registerUser)
userRouter.post('/login', loginUser)
userRouter.put('/:id', [isAuth], updateUser)
userRouter.delete('/:id', [isAuth], deleteUser)

module.exports = userRouter
