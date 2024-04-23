const mongoose = require('mongoose')
const { Schema } = mongoose

const excursionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    excursionImg: { type: String, required: false, trim: true },
    users: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'excursions'
  }
)

const Excursion = mongoose.model('Excursion', excursionSchema)

module.exports = Excursion
