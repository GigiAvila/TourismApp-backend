const User = require('../Model/user')
const seed = require('../Seed/seed')
const bcrypt = require('bcrypt')
const { generateSign } = require('../Config/jwt')

const cleanUserCollections = async () => {
  await User.collection.drop()
  console.log('>>> Colección User limpia!')
}

const saveUserDocuments = async () => {
  const usersWithHashedPass = seed.users.map((user) => {
    return {
      ...user,
      password: bcrypt.hashSync(user.password, 10)
    }
  })

  const users = await User.insertMany(usersWithHashedPass)

  console.log('>>>> Documentos Users guardados con éxito')

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

const getAllUsersFromDB = async () => {
  const users = await User.find()
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

const registerUserInDB = async (payload) => {
  const userDuplicate = await User.findOne({ userName: payload.userName })

  if (!userDuplicate) {
    const newUser = new User(payload)
    await newUser.save()
    return newUser
  } else {
    console.log('>>>>> ⛑️this user already exists in DB')
    return null
  }
}

const loginUserInDB = async (payload) => {
  const user = await User.findOne({ userName: payload.userName })

  if (!user) {
    console.log('>>>>> ⛑️this user does not exist in DB')
    return { success: false, message: 'User does not exist' }
  }

  if (bcrypt.compareSync(payload.password, user.password)) {
    generateSign(user._id)
    if (user.type === 'admin') {
      console.log('>>>> ⛑️ Master User is now signed in')
      return { success: true, message: 'Master User is now logged in' }
    } else {
      console.log('>>>> ⛑️ User is now signed in')
      return { success: true, message: 'User is now logged in' }
    }
  } else {
    console.log('>>>> ⛑️ Passwords do not match')
    return { success: false, message: 'Passwords do not match' }
  }
}

module.exports = {
  cleanUserCollections,
  saveUserDocuments,
  updateUserSelectionsInDB,
  cleanUserPrivateFields,
  getAllUsersFromDB,
  getUserByIdFromDB,
  deleteUserFromDB,
  updateUserByIdInDB,
  registerUserInDB,
  loginUserInDB
}
