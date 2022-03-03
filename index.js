// Modules and Globals
const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

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

const res = require('express/lib/response')

//ROUTS

// Controllers & Routes
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

// Listen for Connections
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})



