const express = require('express')
const destinationRouter = require('express').Router()

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  deleteDestination
} = require('../Controller/destination')
const { isAuth } = require('../Middleware/auth')

destinationRouter.get('/', getAllDestinations)
destinationRouter.get('/:id', getDestinationById)
destinationRouter.post('/', [isAuth], createDestination)
// destinationRouter.put('/:id', [isAuth], updateDestination)
destinationRouter.delete('/:id', [isAuth], deleteDestination)

module.exports = destinationRouter
