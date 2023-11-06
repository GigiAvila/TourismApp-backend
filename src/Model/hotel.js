const mongoose = require('mongoose')
const { Schema } = mongoose

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'hotels'
  }
)

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel
