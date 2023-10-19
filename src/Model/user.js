const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  selections: [
    {
      city: { type: String, ref: 'Destination' },
      hotel: { type: String, ref: 'Destination' },
      excursion: [{ type: String, ref: 'Destination' }]
    }
  ]
})

const User = mongoose.model('User', userSchema)

module.exports = User
