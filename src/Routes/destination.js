const express = require('express')
const destinationRouter = require('express').Router()

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  deleteDestination
} = require('../Controller/destination')

const { isAdmin } = require('../Middleware/admin')

destinationRouter.get('/', getAllDestinations)
destinationRouter.get('/:id', getDestinationById)
destinationRouter.post('/', [isAdmin], createDestination)
// destinationRouter.put('/:id', [isAdmin], updateDestination)
destinationRouter.delete('/:id', [isAdmin], deleteDestination)

module.exports = destinationRouter
