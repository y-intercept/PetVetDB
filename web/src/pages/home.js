const React = require('react')
const { Link } = require('react-router')

const Home = React.createClass({
  render() {
     return (

         <div className="pa3">
             <h1 className="ph4 f3">Home</h1>
             <ul className="list">
               <li><Link to="/owners">Owners</Link></li>
               <li><Link to="/pets">Pets</Link></li>
               <li><Link to="/glossary">Glossary</Link></li>
               <li><Link to="/exams">Exams</Link></li>
               <li><Link to="/about">About</Link></li>
             </ul>
         </div>
      )
  }
})

module.exports = Home
