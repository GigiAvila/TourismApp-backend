const Destination = require('../Model/Destination')
const seed = require('../Seed/seed')

const cleanDestinationCollections = async () => {
  await Destination.collection.drop()
  console.log('>>> Colección Destination limpia!')
}

const saveDestinationDocuments = async () => {
  const destinations = await Destination.insertMany(seed.destinations)
  console.log('>>>>  Documentos Destinations guardados con éxito')

  return {
    destinations
  }
}

const updateCitiesInDestinationInDB = async (cities, destinations) => {
  await Promise.all(
    destinations.map(async (destination) => {
      const citiesInThisDestination = destination.cities.map((city) => {
        const relatedCity = cities.find((c) => c._cityId === city._cityId)

        return relatedCity._id
      })
      await Destination.updateOne(
        { _id: destination._id },
        { cities: citiesInThisDestination }
      )
    })
  )
  console.log('>>>> Cities in destinations actualizados')
}

module.exports = updateCitiesInDestinationInDB

module.exports = updateCitiesInDestinationInDB

const cleanDestinationPrivateFields = async () => {
  await Destination.updateMany(
    {},
    {
      $unset: {
        _countryId: 1
      }
    }
  )

  console.log('>>>> Campo utilitario de Destination eliminado')
}

const getAllDestinationsFromDB = async (filter) => {
  const countryFilterOptions = {
    country: { $regex: new RegExp(filter, 'i') }
  }
  const destinations = await Destination.find(
    filter ? countryFilterOptions : {}
  )

  return destinations
}

const getDestinationByIdFromDB = async (id) => {
  const destination = await Destination.findById(id)
  return destination
}

const createDestinationInDB = async (payload) => {
  const newDestination = new Destination(payload)
  await newDestination.save()
  return newDestination
}

const deleteDestinationFromDB = async (id) => {
  await Destination.deleteOne({ _id: id })
}

module.exports = {
  cleanDestinationCollections,
  saveDestinationDocuments,
  updateCitiesInDestinationInDB,
  cleanDestinationPrivateFields,
  getAllDestinationsFromDB,
  getDestinationByIdFromDB,
  createDestinationInDB,
  deleteDestinationFromDB
}
