// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const res = require('express/lib/response')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.get('/new', (req,res)=>{
    res.render('places/new')
})
app.get('/edit', (req,res)=>{//router.get('/:id/edit', (req, res) => {// router.get('/:id/edit', (req, res) => Wajih
    res.render('places/${data.id}/edit', {place:places[id]} ) // added by wajih {place:places[id]}

// <a href={'/places/${data.id}/edit'} className="btn btn-warning"> Edit</a> 
app.get('/show',(req,res)=>{
    res.render('places/show',{place:places[id]})
})

})
// Listen for Connections
app.listen(process.env.PORT)


///
