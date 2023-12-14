const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, trim: true },
    surname: { type: String, required: false, trim: true },
    country: { type: String, required: false, trim: true },
    email: { type: String, required: false, trim: true },
    userName: { type: String, required: false, trim: true },
    password: { type: String, required: false, trim: true },
    avatar: { type: String, required: false, trim: true }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
