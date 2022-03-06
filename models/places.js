// require the Mongoose package, yoink Schema key from Mongoose to use here
const mongoose = require('mongoose')
const { Schema } = mongoose

// create a new variable, breadSchema
// whose value is a new instance of the Schema class
// built from the object provided as an argument


const placeSchema = new Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

 module.exports = mongoose.model('Place', placeSchema)

