const Destination = require('../Model/destination')
const seed = require('../Seed/seed')

const cleanDestinationCollections = async () => {
  await Destination.collection.drop()
  console.log('>>> Colección City limpia!')
}
const saveDestinationDocuments = async () => {
  const destinations = await Destination.insertMany(seed.destinations)
  console.log('>>>>  Documentos Destinations guardados con éxito')

  return {
    destinations
  }
}

module.exports = {
  cleanDestinationCollections,
  saveDestinationDocuments
}
