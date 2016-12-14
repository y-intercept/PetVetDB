const React = require('react')
const { BrowserRouter, Match } = require('react-router')
const dateformat = require('dateformat')
const NavbarInstance = require('./components/navbar.js')
const now = new Date()
const { Owners, OwnerForm, ShowOwner,
        Pets, PetForm, ShowPet, Home,
        About, Glossary, GlossaryForm,
        ShowGlossary, Exams, ExamForm,
        ShowExam } = require('./pages')

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div>
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

            <MatchWithHeader exactly pattern="/exams" component={Exams} />
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
    <div className="bg-silver avenir" id="bg">
      <NavbarInstance />
      <div className="pv0 pr5 i f4 fw2 fr">Today's date: {dateformat(now, "mm/dd/yyyy")}</div>
      <div className="pt5">
      <Component {...props} />
    </div>
      <div className="pv3" id="footer">
	  		<small id="small" className="f4 db tc">© 2016 <b className="ttu">y-intercept development</b>., All Rights Reserved</small>
			</div>
    </div>
  } />

module.exports = App
