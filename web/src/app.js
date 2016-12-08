const React = require('react')
const { BrowserRouter, Match } = require('react-router')
const Owners = require('./pages/owners/index')
const OwnerForm = require('./pages/owners/form')
const ShowOwner = require('./pages/owners/show')
const Pets = require('./pages/pets/index')
const PetForm = require('./pages/pets/form')
const ShowPet = require('./pages/pets/show')
const Home = require('./pages/home')
const About = require('./pages/about')
const Glossary = require('./pages/glossary/index')
const GlossaryForm = require('./pages/glossary/form')
const ShowGlossary = require('./pages/glossary/show')


const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="avenir">
          <div className="bb b--light-silver mr3 ml3 mt3">
            <span className="f2">Pet Vet DB</span>
          </div>
            <Match exactly pattern="/" component={Home}/>
            <Match pattern="/about" component={About}/>

            <Match exactly pattern="/owners" component={Owners} />
            <Match pattern="/owners/new" component={OwnerForm} />
            <Match pattern="/owners/:id/show" component={ShowOwner} />
            <Match pattern="/owners/:id/edit" component={OwnerForm} />

            <Match exactly pattern="/pets" component={Pets} />
            <Match pattern="/pets/new" component={PetForm} />
            <Match pattern="/pets/:id/show" component={ShowPet} />
            <Match pattern="/pets/:id/edit" component={PetForm} />

            <Match exactly pattern="/glossary" component={Glossary} />
            <Match pattern="/glossary/new" component={GlossaryForm} />
            <Match pattern="/glossary/:id/show" component={ShowGlossary} />
            <Match pattern="/glossary/:id/edit" component={GlossaryForm} />
          </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
