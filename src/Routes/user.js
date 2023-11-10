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
const { isAdmin } = require('../Middleware/admin')
const upload = require('../Middleware/file')

userRouter.get('/', [isAdmin], getAllUsers)
userRouter.get('/:id', [isAdmin], getUserById)
userRouter.post('/register', upload.single('avatar'), registerUser)
userRouter.post('/login', loginUser)
userRouter.put('/:id', [isAuth], upload.single('avatar'), updateUser)
userRouter.delete('/:id', [isAuth], deleteUser)

module.exports = userRouter
