import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router';

function RouterLink ({ to, children }) {
  // use activeStyle from bootstrap.css of your theme
  // search for:  .navbar-default .navbar-nav > .active > a,
  return (
    <li>
      <NavLink to={to}>{children}</NavLink>
    </li>)
}

const TopNavbar = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to='/'>Algos</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li><NavLink to='/binary'>Binary Search</NavLink></li>
          <li><NavLink to='/selection'>Selection Sort</NavLink></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
