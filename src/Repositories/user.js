const User = require('../Model/user')
const seed = require('../Seed/seed')

const cleanUserCollections = async () => {
  await User.collection.drop()
  console.log('>>> Colección User limpia!')
}

const saveUserDocuments = async () => {
  const users = await User.insertMany(seed.users)
  console.log('>>>>  Documentos Users guardados con éxito')

  return {
    users
  }
}

const updateUserSelectionsInDB = async (users, cities, hotels, excursions) => {
  await Promise.all(
    users.map(async (user) => {
      const city = cities.find(
        (city) => city._cityId === user.selection._cityId
      )

      const hotel = hotels.find(
        (hotel) => hotel._hotelId === user.selection._hotelId
      )

      const selectedExcursionIds = user.selection._excursionId

      // Filtra las excursiones para evitar errores cuando no se encuentra una
      const selectedExcursions = excursions.filter((excursion) =>
        selectedExcursionIds.includes(excursion._excursionId)
      )

      const selection = {}

      if (city) {
        selection.city = city._id
      }

      if (hotel) {
        selection.hotel = hotel._id
      }

      if (selectedExcursions.length > 0) {
        selection.excursion = selectedExcursions.map(
          (excursion) => excursion._id
        )
      }

      if (Object.keys(selection).length > 0) {
        await user.updateOne({ $set: { selection } })
      }
    })
  )

  console.log(`>>>> User's selections actualizados`)
}

const cleanUserPrivateFields = async () => {
  await User.updateMany(
    {},
    {
      $unset: {
        _userId: 1,
        'selection._cityId': 1,
        'selection._hotelId': 1,
        'selection._excursionId': 1
      }
    }
  )

  console.log('>>>>> Campos auxiliares de User eliminados')
}

const getAllUsersFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const users = await User.find(filter ? nameFilterOptions : {})
    .populate({
      path: 'selection.city',
      model: 'City',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'selection.hotel',
      model: 'Hotel',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'selection.excursion',
      model: 'Excursion',
      select: {
        _id: true,
        name: true
      }
    })

  return users
}

const getUserByIdFromDB = async (id) => {
  const user = await User.findById(id)
    .populate({
      path: 'selection.city',
      model: 'City',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'selection.hotel',
      model: 'Hotel',
      select: {
        _id: true,
        name: true
      }
    })
    .populate({
      path: 'selection.excursion',
      model: 'Excursion',
      select: {
        _id: true,
        name: true
      }
    })
  return user
}

const createUserInDB = async (payload) => {
  const newUser = new User(payload)
  await newUser.save()
  return newUser
}

const deleteUserFromDB = async (id) => {
  await User.deleteOne({ _id: id })
}

const updateUserByIdInDB = async (id, payload) => {
  const oldUser = await User.findById(id)
  const newUser = new User(payload)

  newUser._id = id

  if (newUser.selection.excursion) {
    const oldExcursions = oldUser.selection.excursion.map((excursion) =>
      excursion.toString()
    )
    const newExcursions = newUser.selection.excursion.map((excursion) =>
      excursion.toString()
    )
    newUser.selection.excursion = [...oldExcursions, ...newExcursions]

    const uniqueExcursions = newUser.selection.excursion.filter(
      (excursion, index, excursions) => excursions.indexOf(excursion) === index
    )

    console.log(uniqueExcursions)
    newUser.selection.excursion = uniqueExcursions
  }

  const user = await User.findByIdAndUpdate(id, newUser, {
    new: true
  })
  return user
}

module.exports = {
  cleanUserCollections,
  saveUserDocuments,
  updateUserSelectionsInDB,
  cleanUserPrivateFields,
  getAllUsersFromDB,
  getUserByIdFromDB,
  createUserInDB,
  deleteUserFromDB,
  updateUserByIdInDB
}
