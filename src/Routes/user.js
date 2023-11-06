const express = require('express')
const userRouter = express.Router()
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} = require('../Controller/user')

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter
