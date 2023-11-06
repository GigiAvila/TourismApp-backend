const express = require('express')
const indexRouter = express.Router()
// const destinationRouter = require('./destination')
const cityRouter = require('./city')
const hotelRouter = require('./hotel')
const excursionRouter = require('./excursion')
const userRouter = require('./user')

// indexRouter.use('/destination', destinationRouter)
indexRouter.use('/cities', cityRouter)
indexRouter.use('/hotels', hotelRouter)
indexRouter.use('/excursions', excursionRouter)
indexRouter.use('/users', userRouter)

module.exports = indexRouter
