const React = require('react')
const Def = require('../default')
 
function show (props) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (props.place.comments.length) {
    comments = props.place.comments.map(c => {
    return (    
            <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>{c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
          ) 
    })
  }
    return (
        <Def>
          <main>
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
                  <h2>  Description </h2>
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
            <hr />
            <h2>Comments</h2>
            { comments }
            <h4>Added by Wajih </h4>
            
 <form  action={`/comment/${props.id}?_method=PUT`} method="POST">
       <div className="row">
         
     <div className="form-group col-sm-6">
        <label htmlFor="name">Author</label>
        <input
        className="form-control" 
        id="author"
         name="author" 
        value = { props.place.comments.author } required />   
      </div>

<div className="form-group col-sm-6">
        <label htmlFor="content">Content</label>
        <input
        className="form-control" 
        id="content"
         name="content" 
        value = { props.place.comments.content } required />   
      </div>


      <div className="form-group col-sm-6">

        <label htmlFor="stars">Star Rating</label>
        <input 
        className="form-control"
         id="stars" 
         name="stars" />
      </div>
      </div>
      
      <div>
        <label htmlFor="rant">Rant</label>
        <input type="checkbox"
          id="rant"
          name="rant" />
      </div>
      
        <input 
        className="btn btn-primary"
        type="submit" 
        value="Add comments" />
    </form>
          </main>
        </Def>
    )
}             
  module.exports = show

/*

/*
  //    original codes
  
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

  */

  /* if (props.place.comments.length) {
    comments = props.place.comments.map(c => {
    return (        
          
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    */ 