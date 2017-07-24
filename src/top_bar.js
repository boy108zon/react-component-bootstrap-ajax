import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class NavBar extends Component {

render(){

    return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="className">Mangel G</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="javasciprt;"></NavItem>
              <NavItem eventKey={2} href="javasciprt;"></NavItem>
              {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown> */}
            </Nav>
          </Navbar>
    );
 };
}
export default NavBar;