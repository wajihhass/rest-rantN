const React = require('react')
const Def = require('../default')
  
function show (props) {
    return (
        <Def>
          <main>
          <h1>Show Places Please for Wajih</h1>
          <div className="row">
          <div className="col-sm-6">
                <h2>{props.place.name}</h2>
                <img src={props.place.pic} alt= {props.place.name}  />
                <h3>
                  Located in {props.place.city}, {props.place.state} 
                  </h3>
                  </div>
                  <div className="col-sm-6">
                <a href={`/places/${props.id}/edit`}
                  className="btn btn-warning">EDIT</a> 
                  <h2>
          Description
        </h2>
        <h3>
          {props.place.showEstablished()}
        </h3>
        <h4>
          Serving {props.place.cuisines}
        </h4>     
                <form action={`/places/${props.id}?_method=DELETE`} method="POST"> 
                <button type="submit" className="btn btn-danger">DELETE</button>
                </form>   
                </div>
                </div>
          </main>
        </Def>
    )
}
  module.exports = show

  /*
<Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        ...
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        ...
    </div>
  </main>
</Def>
*/