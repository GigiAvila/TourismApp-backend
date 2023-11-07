const express = require('express')
const destinationRouter = require('express').Router()

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  deleteDestination
} = require('../Controller/destination')

destinationRouter.get('/', getAllDestinations)
destinationRouter.get('/:id', getDestinationById)
destinationRouter.post('/', createDestination)
// destinationRouter.put('/:id', updateDestination)
destinationRouter.delete('/:id', deleteDestination)

module.exports = destinationRouter
