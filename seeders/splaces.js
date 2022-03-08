const  {Place}  = require('../models')

const placeData=[
    {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, 
{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}
]

const createPlaces = async () => {

    // let's empty out whatever mess we've created in testing
    const oldPlaces = await Place.deleteMany({})
    console.log("CLEARED OUT!", oldPlaces)

    // and recreate our standard four breads to start testing again
    const createdPlaces = await Place.insertMany(placeData)
    console.log("SUCCESS\n", createdPlaces)

    // get outta here so it doesn't hang in the terminal
    process.exit()
}

createPlaces()

/*
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})*/