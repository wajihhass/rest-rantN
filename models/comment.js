const mongoose = require('mongoose')
const commentModel=require('./places')
const { Schema }=mongoose
  const commentSchema = new Schema({
    author: { 
        type: String, 
        default: 'Anonymous' },
    rant: {
         type: Boolean, 
         default: false
         },
    stars: { 
        type: Number, 
        required: true 
    },
    content: { 
        type: String, 
        default: 'Ahsan'
     }
})
  
/*
commentSchema.virtual('places', {
    ref: "Place",
    localField: "_id",
    foreignField: "comment"
})
*/
module.exports = mongoose.model('Comment', commentSchema)
