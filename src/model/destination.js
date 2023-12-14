const mongoose = require('mongoose')
const { Schema } = mongoose

const destintationSchema = new mongoose.Schema(
  {
    country: { type: String, required: true, trim: true }
  },
  {
    timestamps: true,
    collection: 'destinations'
  }
)

const Destination = mongoose.model('Destination', destintationSchema)

module.exports = Destination
