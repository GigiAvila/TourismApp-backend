const Hotel = require('../Model/hotel')
const seed = require('../Seed/seed')

const cleanHotelCollections = async () => {
  await Hotel.collection.drop()
  console.log('>>> Colección Hotel limpia!')
}

const saveHotelDocuments = async () => {
  const hotelData = seed.destinations.reduce((allHotels, destination) => {
    const cityHotels = destination.cities.reduce((cityHotels, city) => {
      cityHotels.push(...city._hotels)
      return cityHotels
    }, [])
    allHotels.push(...cityHotels)
    return allHotels
  }, [])

  const hotels = await Hotel.insertMany(hotelData)
  console.log('>>>> Documentos Hotel guardados con éxito')

  return {
    hotels
  }
}

const updateUsersInHotelsInDB = async (users, hotels) => {
  await Promise.all(
    hotels.map(async (hotel) => {
      const usersInThisHotel = hotel._users.map((userId) => {
        const relatedUser = users.find((user) => user._userId === userId)
        return relatedUser._id
      })
      await hotel.updateOne({ users: usersInThisHotel })
    })
  )

  console.log('>>>> Users in hotels actualizados')
}

const cleanHotelPrivateFields = async () => {
  await Hotel.updateMany(
    {},
    {
      $unset: {
        _hotelId: 1,
        _users: 1
      }
    }
  )

  console.log('>>>> Campo utilitario de Hotel eliminado')
}

const getAllHotelsFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const hotels = await Hotel.find(filter ? nameFilterOptions : {}).populate({
    path: 'users',
    model: 'User',
    select: {
      _id: true,
      email: true
    }
  })

  return hotels
}

const getHotelByIdFromDB = async (id) => {
  const hotel = await Hotel.findById(id).populate({
    path: 'users',
    model: 'User',
    select: {
      _id: true,
      email: true
    }
  })
  return hotel
}

const createHotelInDB = async (payload) => {
  const newHotel = new Hotel(payload)
  await newHotel.save()
  return newHotel
}

const deleteHotelFromDB = async (id) => {
  await Hotel.deleteOne({ _id: id })
}

const updateHotelByIdInDB = async (id, payload) => {
  const oldHotel = await Hotel.findById(id)
  const newHotel = new Hotel(payload)

  newHotel._id = id

  if (newHotel.users) {
    newHotel.users = [...oldHotel.users, ...newHotel.users]
    const uniqsUsers = newHotel.users.filter((user, index, users) => {
      return users.indexOf(user) === index
    })
    newHotel.users = uniqsUsers
  }

  const hotelUpdated = await Hotel.findByIdAndUpdate(id, newHotel, {
    new: true
  })

  return hotelUpdated
}

module.exports = {
  cleanHotelCollections,
  saveHotelDocuments,
  updateUsersInHotelsInDB,
  cleanHotelPrivateFields,
  getAllHotelsFromDB,
  getHotelByIdFromDB,
  createHotelInDB,
  deleteHotelFromDB,
  updateHotelByIdInDB
}
