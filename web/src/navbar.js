const React = require('react')
const { Link } = require('react-router')
//const { Navbar, NavItem, Nav } = require('react-bootstrap')
import { Navbar, NavItem, Nav } from 'react-bootstrap'

// const navbarInstance = (
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <Link to="/">PetVetDB</Link>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav pullRight>
//         <NavItem eventKey={1}><Link to="/home">Home</Link></NavItem>
//         <NavItem eventKey={2}><Link to="/owners">Owners</Link></NavItem>
//         <NavItem eventKey={3}><Link to="/pets">Pets</Link></NavItem>
//         <NavItem eventKey={4}><Link to="/exams">Exams</Link></NavItem>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

const NavbarInstance = React.createClass({
  render(){
    return(
      <Navbar inverse collapseOnSelect>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

// const navbarInstance = (
//   <Navbar inverse collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">React-Bootstrap</a>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <NavItem eventKey={1} href="#">Link</NavItem>
//         <NavItem eventKey={2} href="#">Link</NavItem>
//         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//           <MenuItem eventKey={3.1}>Action</MenuItem>
//           <MenuItem eventKey={3.2}>Another action</MenuItem>
//           <MenuItem eventKey={3.3}>Something else here</MenuItem>
//           <MenuItem divider />
//           <MenuItem eventKey={3.3}>Separated link</MenuItem>
//         </NavDropdown>
//       </Nav>
//       <Nav pullRight>
//         <NavItem eventKey={1} href="#">Link Right</NavItem>
//         <NavItem eventKey={2} href="#">Link Right</NavItem>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
// );

module.exports = NavbarInstance
