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

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', registerUser)
// userRouter.post('/', loginUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter
