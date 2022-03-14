const express = require('express')
const router = express.Router()
const places = require('../models/places.js')

const comment = express.Router()
const models = require('../models')
//wajih

const commentModel=require('../models/comment.js')
/*const commentSeedData = require('../seeders/seed-comments')*/
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
//create comment added by Wajih
/*comment.get('/', (req,res)=>{
    commentModel.find()
    .populate('places')
    .then(foundComments=>{res.json(foundComments)
    })
})

comment.get('/data/seed',(req,res)=>{
    commentModel.insertMany(commentSeedData)
    .then(res.redirect('/places'))
})

comment.get('/:id', (req,res) => {
    commentModel.findById(req.params.id)
        .populate('places')
        .then(foundComments => {
            // res.json(foundBaker)
            res.render('show', {
                comment: foundComments
            })
        })
})
*/
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    if (req.body.rant) {
      req.body.rant = true
    } 
    else {
      req.body.rant = false
    }
    places.findById(req.params.id)
    .then(place => {
        places.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
    res.send('GET /places/:id/comment stub')
})
//ended what created by wajih
   

//NEW
router.get('/new', (req, res) => {
  // render the view containing the HTML form
    res.render('places/new')
  })

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id
    //const individualPlace=places[id]//wajih
  
  // use the place model to query the database for the place with this precise ID
  places.findById(id)
  // fill in the data for the comments
  .populate('comments')
  .then(
      // once again, the parameter for this callback function is the /resolved/ value of the promise
      // i.e., the place we wanted to find
      individualPlace => {
          console.log('place.comments')
          res.render('places/show', { 
              place: individualPlace,
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
  //const individualPlace=places[id]
  places.findById(id)
  .then(
      // once again, the parameter for this callback function is the /resolved/ value of the promise
      // i.e., the place we wanted to find
      individualPlace => {
          res.render('places/edit', { 
              place: individualPlace,
              id: id
          })
      }
  ).catch(
      err => {
          console.log(err)
          res.sendStatus(404)
      })
  })
  


 
//UPDATE PUT
router.put('/:id', (req, res) => {
  // stuff we need to do:
    // get the ID
    // get the new values (and keys)
  const id = req.params.id
  //const individualPlace=places[id]

  
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

 // if image is '', change it to `undefined` to enable the default
    // since our form sends an empty string, the schema considers the value to exist (technically)
    req.body.pic = req.body.pic || undefined
// .orFail forces the method below to throw an error if the ID is not found
    // which activates the .catch callback and sends a 404
    // this is something you _can_ do, but it's not necessarily the best move in all situations
    places.findByIdAndUpdate(id, req.body).orFail()
        .then(
            updatedPlace => {
                console.log("updatedPlace", updatedPlace)
                res.redirect(`/places/${id}`)
            }
        ).catch(
            // see INDEX route for explanation
            err => {
                console.log(err)
                res.sendStatus(404)
            }
        )
          
})


//   DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id
  places.findByIdAndDelete(id)
        .then(
            deletedPlace=> {
                // console.log(deletedBread)
                res.status(303).redirect('/places')
            }
        ).catch(
            // see INDEX route for explanation
            err => {
                console.log(err)
                res.sendStatus(404)
            }
        )
})
    
module.exports = router
//module.exports = comment

//module.exports = mongoose.model('Place', commentSchema)




