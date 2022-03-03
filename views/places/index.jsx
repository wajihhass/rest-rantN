const React = require('react')
const Def = require('../default')

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/chia-fruit-drink.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/green.jpg'
  }]

function index (props) {
  console.log(props)
  let placesFormatted = props.places.map((place, index) => {// places is an array of our data
    return (
      <div className="col-sm-6">
               
      <h2>
        <a href={`/places/${index}`} >
          {place.name}  </a>
      </h2>      
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <div class="row">
          <div class="column">
        <img src={place.pic} alt={place.name}  class="center1" />
        </div>
        </div>
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}
module.exports = index




