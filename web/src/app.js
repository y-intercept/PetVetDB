const React = require('react')
const { BrowserRouter, Match } = require('react-router')
// const navbarInstance = require('./navbar.js')
import NavbarInstance from './navbar.js'
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
const Exam = require('./pages/exams/index')
const ExamForm = require('./pages/exams/form')
const ShowExam = require('./pages/exams/show')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="avenir bg-light-gray h-100 w-100">
          {/* <div className="bb b--light-silver mr3 ml3 mt3">
            <span className="f2">Pet Vet DB</span>
          </div> */}
            <MatchWithHeader exactly pattern="/" component={Home}/>
            <MatchWithHeader pattern="/about" component={About}/>

            <MatchWithHeader exactly pattern="/owners" component={Owners} />
            <MatchWithHeader pattern="/owners/new" component={OwnerForm} />
            <MatchWithHeader pattern="/owners/:id/show" component={ShowOwner} />
            <MatchWithHeader pattern="/owners/:id/edit" component={OwnerForm} />

            <MatchWithHeader exactly pattern="/pets" component={Pets} />
            <MatchWithHeader pattern="/pets/new" component={PetForm} />
            <MatchWithHeader pattern="/pets/:id/show" component={ShowPet} />
            <MatchWithHeader pattern="/pets/:id/edit" component={PetForm} />

            <MatchWithHeader exactly pattern="/glossary" component={Glossary} />
            <MatchWithHeader pattern="/glossary/new" component={GlossaryForm} />
            <MatchWithHeader pattern="/glossary/:id/show" component={ShowGlossary} />
            <MatchWithHeader pattern="/glossary/:id/edit" component={GlossaryForm} />

            <MatchWithHeader exactly pattern="/exams" component={Exam} />
            <MatchWithHeader pattern="/exams/new" component={ExamForm} />
            <MatchWithHeader pattern="/exams/:id/show" component={ShowExam} />
            <MatchWithHeader pattern="/exams/:id/edit" component={ExamForm} />
          </div>
      </BrowserRouter>
    )
  }
})

const MatchWithHeader = ({component: Component, ...rest}) =>
  <Match {...rest} render={props =>
    <div>
      <NavbarInstance />
      <Component {...props} />
    </div>
  } />

module.exports = App
