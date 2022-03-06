const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`connected to MongoDB at: ${MONGO_URI}`)
})

const mongoose = require('mongoose')
module.exports.Place = require('./places')