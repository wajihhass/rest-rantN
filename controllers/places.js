const express = require('express')
const router = express.Router()
const places = require('../models/places.js')

  //INDEX
router.get('/', (req, res) => {
  // use the places model to query the DB for all breads
    // this creates a "promise"  
    places.find()
          // by chaining .then here, we can set a callback function to run when the promise resolves
          .then(
              // for the callback function, we can set a parameter
              // that will take in the resolved value of the promise
              // i.e., the actual info we wanted to get from the database
               places => {
                    res.render('places/index', { places: places })

                      // good practice for simply sending the data in a REST API
                     // res.json(breadList)
               }
            ).catch(
                // .catch takes over if an error is thrown!!!
                // we set a parameter to capture the error (in this case, "err" below)
                // then a callback function to determine what we want to do
                // in this lazy version, we're just sending a 404
                err => {
                    console.log(err)
                    res.sendStatus(404)
                })
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

  // if image is '', change it to `undefined` to enable the default
    // since our form sends an empty string, the schema considers the value to exist (technically)
    req.body.pic = req.body.pic || undefined


  // add user submitted form data to our list of places
  // use the places model to create a new database entry built from req.body
  places.create(req.body)
// the callback function in .then activates only once the promise is resolved
        // this way, we ensure the user isn't redirected until the new entry is created
        .then(
          createdPlace => {
              // we don't necessarily /need/ to use our createdPlace for anything here
              console.log(createdPlace)
              res.redirect('/places')

              // good practice for simply sending the data in a REST API
              // res.status(201).json(breadList)
          }
      ).catch(
          err => {
              console.log(err)
              res.sendStatus(404)
          })
})

    //NEW
router.get('/new', (req, res) => {
  // render the view containing the HTML form
    res.render('places/new')
  })

// SHOW
router.get('/:id', (req, res) => {
  const id = req.params.id
  //const individualPlace=places[id]


// use the Bread model to query the database for the bread with this precise ID
places.findById(id)
.then(
    // once again, the parameter for this callback function is the /resolved/ value of the promise
    // i.e., the bread we wanted to find
    individualPlace => {
        res.render('places/show', { 
            places: individualPlace,
            id: id
        })
    }
).catch(
    err => {
        console.log(err)
        res.sendStatus(404)
    })
})
  
//EDIT
  router.get('/:id/edit', (req, res) => {
    // get current id
    // get current bread info
    // render this through a view (and pass the current info as props)

  const id = req.params.id
  const individualPlace=places[id]

  
  res.render('places/edit', {
    places: individualPlace,
    id: id
})
})
 
//UPDATE PUT
router.put('/:id', (req, res) => {
  // stuff we need to do:
    // get the ID
    // get the new values (and keys)
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
  
  places.splice(id, 0)
    res.status(303).redirect('/places') 
})
  
module.exports = router
