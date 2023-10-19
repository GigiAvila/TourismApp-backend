const express = require('express')
const indexRouter = require('express').Router()
const destinationRouter = require('./destination')
const userRouter = require('./user')
const router = express.Router()

router.use('/destination', destinationRouter)
router.use('/user', userRouter)

module.exports = indexRouter
