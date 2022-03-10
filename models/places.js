// require the Mongoose package, yoink Schema key from Mongoose to use here
const mongoose = require('mongoose')
const { Schema } = mongoose

// create a new variable, placeSchema
// whose value is a new instance of the Schema class
// built from the object provided as an argument


const placeSchema = new Schema({
  name: { 
    type: String, required: true
   },
  pic: {
     type: String, default: 'http://placekitten.com/350/350'
     },
  cuisines: {
     type: String, required: true
     },
  city: {
     type: String, default: 'Anytown'
     },
  state: {
     type: String, default: 'USA' 
    },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Comment' 
  }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

 module.exports = mongoose.model('Place', placeSchema)

