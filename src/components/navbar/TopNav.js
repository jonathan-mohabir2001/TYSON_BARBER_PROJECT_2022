import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
function TopNav() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className='nav-main-title'>
            TyDaBarber
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/home" className='nav-title'>
                About Me
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="/gallery" className='nav-title'>
                Photo Gallery
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="/BookAppoitment" className='nav-title'>
                Book An Appoitment
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
