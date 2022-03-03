const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
             <h2 class="cent"> <p>Oops, sorry, we can't find this page!</p></h2>
              <div>
      <img src="/images/green.jpg" alt="Green Nature" class="center" />
      <div>
       <h2 class="cent"> Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a></h2>
      </div>
    </div>

          </main>
      </Def>
    )
  }

module.exports = error404
