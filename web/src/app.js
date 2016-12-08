const React = require('react')
const {BrowserRouter, Match} = require('react-router')
const Owners = require('./pages/owners/index')
const OwnerForm = require('./pages/owners/form')
const PetForm = require('./pages/pets/form')
const Pets = require('./pages/pets/index')
const ShowOwner = require('./pages/owners/show')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="avenir">
          <div className="bb b--light-silver mr3 ml3 mt3">
            <span className="f2">Pet Vet DB</span>
          </div>

          <Match exactly pattern="/owners" component={Owners}/>
          <Match pattern="/owners/new" component={OwnerForm}/>
          <Match pattern="/owners/:id/show" component={ShowOwner}/>
          <Match exactly pattern="/pets" component={Pets}/>
          <Match pattern="/pets/new" component={PetForm}/>

        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
