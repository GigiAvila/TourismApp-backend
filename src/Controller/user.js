const seed = require('../Seed/seed')
const User = require('../Model/User')

const cleanUserCollections = async () => {
  await User.collection.drop()
  console.log('>>> Colecciones limpias!')
}
const saveUserDocuments = async () => {
  const users = await User.insertMany(seed.users)
  console.log('>>>> Documentos guardados con éxito')

  return {
    users
  }
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find()
    return res.status(200).json(allUsers)
  } catch (error) {
    return res.status(400).json({ data: 'Can´t find Users' })
  }
}

const getUserById = async (req, res) => {}

const updateUser = async (req, res) => {}

const createUser = async (req, res) => {}

const deleteUser = async (req, res) => {}

module.exports = {
  cleanUserCollections,
  saveUserDocuments,
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser
}
