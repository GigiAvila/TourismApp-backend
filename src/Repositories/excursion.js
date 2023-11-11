const { deleteFile } = require('../Middleware/deleteFile')
const Excursion = require('../Model/excursion')
const seed = require('../Seed/seed')

const cleanExcursionCollections = async () => {
  await Excursion.collection.drop()
  console.log('>>> Colección Excursion limpia!')
}

const saveExcursionDocuments = async () => {
  const excursionData = seed.destinations.reduce(
    (allExcursions, destination) => {
      const cityExcursions = destination.cities.reduce(
        (cityExcursions, city) => {
          cityExcursions.push(...city._excursions)
          return cityExcursions
        },
        []
      )
      allExcursions.push(...cityExcursions)
      return allExcursions
    },
    []
  )

  const excursions = await Excursion.insertMany(excursionData)
  console.log('>>>> Documentos Excursion guardados con éxito')

  return {
    excursions
  }
}

const updateUsersInExcursionsInDB = async (users, excursions) => {
  await Promise.all(
    excursions.map(async (excursion) => {
      const usersInThisExcursions = excursion._users.map((userId) => {
        const relatedUser = users.find((user) => user._userId === userId)
        return relatedUser._id
      })
      await excursion.updateOne({ users: usersInThisExcursions })
    })
  )

  console.log('>>>> Users in excursions actualizados')
}

const cleanExcursionPrivateFields = async () => {
  await Excursion.updateMany(
    {},
    {
      $unset: {
        _excursionId: 1,
        _users: 1
      }
    }
  )

  console.log('>>>> Campo utilitario de Excursion eliminado')
}
const getAllExcursionsFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const excursions = await Excursion.find(
    filter ? nameFilterOptions : {}
  ).populate({
    path: 'users',
    model: 'User',
    select: {
      _id: true,
      email: true
    }
  })

  return excursions
}

const getExcursionByIdFromDB = async (id) => {
  const excursion = await Excursion.findById(id).populate({
    path: 'users',
    model: 'User',
    select: {
      _id: true,
      email: true
    }
  })
  return excursion
}

const createExcursionInDB = async (payload) => {
  const newExcursion = new Excursion(payload)
  await newExcursion.save()
  return newExcursion
}

const deleteExcursionFromDB = async (id) => {
  await Excursion.deleteOne({ _id: id })
}

const updateExcursionByIdInDB = async (id, payload) => {
  const oldExcursion = await Excursion.findById(id)
  const newExcursion = new Excursion(payload)

  newExcursion._id = id

  newExcursion.excursionImg && oldExcursion.excursionImg
    ? deleteFile(oldExcursion.excursionImg)
    : null

  if (newExcursion.users) {
    newExcursion.users = [...oldExcursion.users, ...newExcursion.users]
    const uniqsUsers = newExcursion.users.filter((user, index, users) => {
      return users.indexOf(user) === index
    })
    newExcursion.users = uniqsUsers
  }

  const excursionUpdated = await Excursion.findByIdAndUpdate(id, newExcursion, {
    new: true
  })

  return excursionUpdated
}

module.exports = {
  cleanExcursionCollections,
  saveExcursionDocuments,
  updateUsersInExcursionsInDB,
  cleanExcursionPrivateFields,
  getAllExcursionsFromDB,
  getExcursionByIdFromDB,
  createExcursionInDB,
  deleteExcursionFromDB,
  updateExcursionByIdInDB
}
