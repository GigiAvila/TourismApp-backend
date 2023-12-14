const express = require('express')
const userRouter = express.Router()
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  registerUser,
  loginUser
} = require('../controller/user')
const { isAuth } = require('../middleware/auth')
const { isAdmin } = require('../middleware/admin')
const upload = require('../middleware/file')

userRouter.get('/', [isAdmin], getAllUsers)
userRouter.get('/:id', [isAdmin], getUserById)
userRouter.post('/register', upload.single('avatar'), registerUser)
userRouter.post('/login', loginUser)
userRouter.put('/:id', [isAuth], upload.single('avatar'), updateUser)
userRouter.delete('/:id', [isAuth], deleteUser)

module.exports = userRouter
