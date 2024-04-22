const {
  cleanDestinationCollections,
  saveDestinationDocuments,
  updateCitiesInDestinationInDB,
  cleanDestinationPrivateFields
} = require('../repositories/destination')

const {
  cleanUserCollections,
  saveUserDocuments,
  updateUserSelectionsInDB,
  cleanUserPrivateFields
} = require('../repositories/user')

const {
  cleanCityCollections,
  saveCityDocuments,
  updateUsersInCityInDB,
  updateHotelInCityInDB,
  updateExcursionInCityInDB,
  cleanCityPrivateFields
} = require('../repositories/city')

const {
  cleanHotelCollections,
  saveHotelDocuments,
  updateUsersInHotelsInDB,
  cleanHotelPrivateFields
} = require('../repositories/hotel')

const {
  cleanExcursionCollections,
  saveExcursionDocuments,
  updateUsersInExcursionsInDB,
  cleanExcursionPrivateFields
} = require('../repositories/excursion')

const seedFunctions = async () => {
  await cleanDestinationCollections()
  await cleanUserCollections()
  await cleanCityCollections()
  await cleanHotelCollections()
  await cleanExcursionCollections()
  const { destinations } = await saveDestinationDocuments()
  const { users } = await saveUserDocuments()
  const { cities } = await saveCityDocuments()
  const { hotels } = await saveHotelDocuments()
  const { excursions } = await saveExcursionDocuments()
  updateCitiesInDestinationInDB(cities, destinations)
  updateUserSelectionsInDB(users, cities, hotels, excursions)
  updateHotelInCityInDB(cities, hotels)
  updateExcursionInCityInDB(cities, excursions)
  updateUsersInCityInDB(users, cities)
  updateUsersInHotelsInDB(users, hotels)
  updateUsersInExcursionsInDB(users, excursions)
  cleanDestinationPrivateFields()
  cleanUserPrivateFields()
  cleanCityPrivateFields()
  cleanHotelPrivateFields()
  cleanExcursionPrivateFields()
}

module.exports = seedFunctions
