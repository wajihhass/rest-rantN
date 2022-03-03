const React = require('react')
const Def = require('../default')
  
function show (props) {
    return (
        <Def>
          <main>
                <h2>{props.place.name}</h2>
                <img alt={props.place.name} src={props.place.image} />
                <a href={`/places/${props.id}/edit`}
                  className="btn btn-warning">EDIT</a> 
                       
                <form action={`/places/${props.id}?_method=DELETE`} method="POST"> 
                <button type="submit" className="btn btn-danger">DELETE</button>
                </form>   
                
          </main>
        </Def>
    )
}
  module.exports = show


