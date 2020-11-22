import React from 'react';
import { Navbar, 
  Nav, 
//  NavDropdown
 } from 'react-bootstrap';

class NavigationBar extends React.Component {
  render(){
    return(
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand className="navbar-brand" >Javier <strong>Villarroel</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="bs-example-navbar-collapse-1">
        <Nav className="navbarRB ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about" >About</Nav.Link>
          <Nav.Link href="/projects" >Projects</Nav.Link>
          
          {/*<NavDropdown title="Services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Maker</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item>
          </NavDropdown>*/}
          <Nav.Link href="/resume" >CV</Nav.Link>
          <Nav.Link href="/contact" >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavigationBar;
