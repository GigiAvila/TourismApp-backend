const { deleteFile } = require('../Middleware/deleteFile')
const City = require('../Model/city')
const seed = require('../Seed/seed')

const cleanCityCollections = async () => {
  await City.collection.drop()
  console.log('>>> Colección City limpia!')
}

const saveCityDocuments = async () => {
  const cityData = seed.destinations.reduce((allCities, destination) => {
    allCities.push(...destination.cities)
    return allCities
  }, [])

  const cities = await City.insertMany(cityData)
  console.log('>>>> Documentos Cities guardados con éxito')

  return {
    cities
  }
}

const updateUsersInCityInDB = async (users, cities) => {
  await Promise.all(
    cities.map(async (city) => {
      const usersInThisCity = city._users.map((userId) => {
        const relatedUser = users.find((user) => user._userId === userId)
        return relatedUser._id
      })
      await city.updateOne({ users: usersInThisCity })
    })
  )

  console.log('>>>> Users in cities actualizados')
}

const updateHotelInCityInDB = async (cities, hotels) => {
  const updateHotelsInCity = cities.map(async (city) => {
    if (city && city._hotels) {
      const hotelsInThisCity = city._hotels.map((cityHotel) => {
        const relatedHotel = hotels.find(
          (hotel) => hotel._hotelId === cityHotel._hotelId
        )
        return relatedHotel._id
      })

      return City.updateOne({ _id: city._id }, { hotels: hotelsInThisCity })
    }
  })

  await Promise.all(updateHotelsInCity)

  console.log('>>>> Hotels in cities actualizados')
}

const updateExcursionInCityInDB = async (cities, excursions) => {
  const updateExcursionsInCity = cities.map(async (city) => {
    if (city && city._excursions) {
      const excursionsInThisCity = city._excursions.map((cityExcursion) => {
        const relatedExcursion = excursions.find(
          (excursion) => excursion._excursionId === cityExcursion._excursionId
        )
        return relatedExcursion._id
      })

      return City.updateOne(
        { _id: city._id },
        { excursions: excursionsInThisCity }
      )
    }
  })

  await Promise.all(updateExcursionsInCity)

  console.log('>>>> Excursions in cities actualizados')
}

const cleanCityPrivateFields = async () => {
  await City.updateMany(
    {},
    {
      $unset: {
        _cityId: 1,
        _users: 1,
        _hotels: 1,
        _excursions: 1
      }
    }
  )

  console.log('>>>> Campo utilitario de City eliminado')
}

const getAllCitiesFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const cities = await City.find(filter ? nameFilterOptions : {})
    .populate({
      path: 'users',
      model: 'User',
      select: {
        _id: true,
        name: true,
        surname: true,
        email: true
      }
    })
    .populate({
      path: 'excursions',
      model: 'Excursion',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'hotels',
      model: 'Hotel',
      select: {
        _id: true,
        name: true
      }
    })

  return cities
}

const getCityByIdFromDB = async (id) => {
  const city = await City.findById(id)
    .populate({
      path: 'users',
      model: 'User',
      select: {
        _id: true,
        name: true,
        surname: true,
        email: true
      }
    })
    .populate({
      path: 'excursions',
      model: 'Excursion',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'hotels',
      model: 'Hotel',
      select: {
        _id: true,
        name: true
      }
    })
  return city
}

const createCityInDB = async (payload) => {
  console.log(payload)
  const newCity = new City(payload)
  await newCity.save()
  return newCity
}

const deleteCityFromDB = async (id) => {
  await Excursion.deleteOne({ _id: id })
}

const updateCityByIdInDB = async (id, payload) => {
  const oldCity = await City.findById(id)
  const newCity = new City(payload)

  newCity._id = id
  newCity.cityImg && oldCity.cityImg ? deleteFile(oldCity.cityImg) : null

  if (newCity.users) {
    newCity.users = [...oldCity.users, ...newCity.users]
    const uniqsUsers = newCity.users.filter((user, index, users) => {
      return users.indexOf(user) === index
    })
    newCity.users = uniqsUsers
  }

  const cityUpdated = await City.findByIdAndUpdate(id, newCity, {
    new: true
  })

  return cityUpdated
}

module.exports = {
  cleanCityCollections,
  saveCityDocuments,
  updateUsersInCityInDB,
  updateHotelInCityInDB,
  updateExcursionInCityInDB,
  cleanCityPrivateFields,
  getAllCitiesFromDB,
  getCityByIdFromDB,
  createCityInDB,
  deleteCityFromDB,
  updateCityByIdInDB
}
