const express = require('express')
const destinationsRouter = require('express').Router()
const router = express.Router()

const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../Controller/destination')

router.get('/', getAllDestinations)
router.get('/:id', getDestinationById)
router.post('/', createDestination)
router.put('/:id', updateDestination)
router.delete('/:id', deleteDestination)

module.exports = destinationsRouter
