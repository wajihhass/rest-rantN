const React = require('react')
const Def = require('../default')
  
function show (data) {
    return (
        <Def>
          <main>
                <h1>show</h1>
                <h1>   {data.place.name}  </h1>
                <a href={`/places/${data.id}/edit`}  className="btn btn-warning">  Edit</a> 
                       
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">  Delete  </button>
                </form>   
                
          </main>
        </Def>
    )
}
  module.exports = show


//  {`/places/${data.id}?_method=PUT`}


//original work
/*  function show () {
    return (
        <Def>
          <main>
                <h1>Show Page</h1>
                <a href="/places/edit" className="btn btn-warning"> Edit</a> 
                       
                <form method="POST" action={'/places/${data.id}?_method=DELETE'}> 
                <button type="submit" className="btn btn-danger">  Delete  </button>
                </form>   
                
          </main>
        </Def>
    )
}*/

/* Work version 
function show () {
    return (
        <Def>
          <main>
                <h1>Show Page</h1>
                <a href="/places/edit" className="btn btn-warning"> Edit</a> 
                       
                <form method="POST" action=""> 
                <button type="submit" className="btn btn-danger">  Delete  </button>
                </form>   
                
          </main>
        </Def>
    )
}
  module.exports = show
*/

