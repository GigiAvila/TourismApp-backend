const mongoose = require('mongoose')
const { Schema } = mongoose

const destintationSchema = new mongoose.Schema({
  country: { type: String, required: true, trim: true },
  cities: [
    {
      name: { type: String, required: true, trim: true },
      hotels: [
        {
          name: { type: String, required: true, trim: true },
          users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
        }
      ],
      excursions: [
        {
          name: { type: String, required: true, trim: true },
          users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
        }
      ]
    }
  ]
})

const Destination = mongoose.model('Destination', destintationSchema)

module.exports = Destination
