const seed = require('../Seed/seed')
const Destination = require('../Model/Destination')

const cleanDestinationCollections = async () => {
  await Destination.collection.drop()
  console.log('>>> Colecciones limpias!')
}
const saveDestinationDocuments = async () => {
  const destinations = await Destination.insertMany(seed.destinations)
  console.log('>>>> Documentos guardados con éxito')

  return {
    destinations
  }
}

const getAllDestinations = async (req, res) => {
  try {
    const allDestinations = await Destination.find().populate({
      path: 'cities.hotels.users',
      model: 'User',
      select: {
        _id: true,
        name: true,
        surname: true,
        email: true
      }
    })

    return res.status(200).json(allDestinations)
  } catch (error) {
    return res.status(400).json({ data: `Can't find destinations` })
  }
}

const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params
    const destination = await Destination.findById(id).populate({
      path: 'cities.hotels.users',
      model: 'User',
      select: {
        _id: true,
        name: true,
        surname: true,
        email: true
      }
    })
    return res.status(200).json({ data: destination })
  } catch (error) {
    return res.status(400).json({ data: `Can´t find destination` })
  }
}

const updateDestination = async (req, res) => {
  try {
    const { id } = req.params

    const oldDestination = await Destination.findById(id)
    const newDestination = await Destination(req.body)

    newDestination._id = id

    const destinationUpdated = await Destination.findByIdAndUpdate(
      id,
      newDestination,
      { new: true }
    )
    res.status(200).json({ data: destinationUpdated })
  } catch (error) {
    return res.status(400).json({ data: `Can't update destination` })
  }
}

const createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body)
    const destinationBD = await newDestination.save()
    return res.status(201).json({ data: destinationBD })
  } catch (error) {
    return res.status(400).json({ data: `Can't create destination` })
  }
}

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params
    const destination = await Destination.findByIdAndDelete(id)
    return res.status(200).json({ data: destination })
  } catch (error) {
    return res.status(400).json({ data: `Can't create destination` })
  }
}

module.exports = {
  cleanDestinationCollections,
  saveDestinationDocuments,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  createDestination,
  deleteDestination
}
