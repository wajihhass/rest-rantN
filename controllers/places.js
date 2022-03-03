const express = require('express')
const router = express.Router()
const places = require('../models/places.js')

  //INDEX
router.get('/', (req, res) => {
    res.render('Places/index', { places: places })
})
  //CREATE
router.post('/', (req, res) => {
 // console.log(req.body)

  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  // add user submitted form data to our list of places
  places.push(req.body)

  // redirect to the places list view for server-side rendering
  res.redirect('/places')
}) 

    //NEW
router.get('/new', (req, res) => {
  // render the view containing the HTML form
    res.render('places/new')
  })
// SHOW
router.get('/:id', (req, res) => {
  const id = req.params.id
  const individualPlace=places[id]
  
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', {
     place: individualPlace,
      id:id
    })}
  
}) 
  //EDIT
  router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  const individualPlace=places[id]
 
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    
    res.render('places/edit', {
      place: individualPlace,
      id:id
    
  })}
})

//UPDATE PUT
router.put('/:id', (req, res) => {
  const id = req.params.id
  const individualPlace=places[id]
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})
//   DELETE
router.delete('/places/:id', (req, res) => {
  const id = req.params.id
  
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 0)
    res.status(303).redirect('/places')
   
  }
})
  
module.exports = router
