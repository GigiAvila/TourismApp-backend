const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, trim: true },
    surname: { type: String, required: false, trim: true },
    country: { type: String, required: false, trim: true },
    email: { type: String, required: false, trim: true }
    // selection: {
    //   city: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'City',
    //     required: false
    //   },
    //   hotel: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Hotel',
    //     required: false
    //   },
    //   excursion: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Excursion',
    //       required: false
    //     }
    //   ]
    // }
  },
  {
    timestamps: true,
    collection: 'users'
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
