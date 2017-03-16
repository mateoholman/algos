import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Link to="/">
        <Navbar.Brand>Algos</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/binary">
              <NavItem>Binary</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
