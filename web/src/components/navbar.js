const React = require('react')
const { Link } = require('react-router')
import { Navbar, NavItem, Nav } from 'react-bootstrap'

const NavbarInstance = React.createClass({
  render(){
    return(
      <Navbar inverse collapseOnSelect id="navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">PetVetDB</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
            <NavItem eventKey={2}><Link to="/owners">Owners</Link></NavItem>
            <NavItem eventKey={3}><Link to="/pets">Pets</Link></NavItem>
            <NavItem eventKey={4}><Link to="/exams">Exams</Link></NavItem>
            <NavItem eventKey={5}><Link to="/about">About</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

module.exports = NavbarInstance
