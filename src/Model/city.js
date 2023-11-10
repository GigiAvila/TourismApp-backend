const mongoose = require('mongoose')
const { Schema } = mongoose

const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    cityImg: { type: String, required: false, trim: true },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
    ],
    hotels: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: false }
    ],
    excursions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Excursion',
        required: false
      }
    ]
  },
  {
    timestamps: true,
    collection: 'cities'
  }
)
const City = mongoose.model('City', citySchema)

module.exports = City
