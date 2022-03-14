// Modules and Globals
const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT


// DATABASE

const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`connected to MongoDB at: ${MONGO_URI}`)
})

// RENDERING ENGINE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//STATIC
app.use(express.static('public'))

// METHOD-OVERRIDE MIDDLEWARE
// https://www.npmjs.com/package/method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// REQUEST PARSING
app.use(express.urlencoded({ extended: true }))



//ROUTS

// Controllers & Routes
//PLACES
const placesController = require('./controllers/places.js')
app.use('/places', placesController)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.get('/new', (req,res)=>{
    res.render('places/new')
})
app.get('/edit', (req,res)=>{
    res.render('places/${props.id}/edit', {place:places[id]} ) 

})
app.get('/show',(req,res)=>{
    res.render('places/show',{place:places[id]})
})
//added by wajih
/* 
app.get('/show',(req,res)=>{
    res.render('places/show',{comment:comments[id]})

})*/
// Listen for Connections
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})



