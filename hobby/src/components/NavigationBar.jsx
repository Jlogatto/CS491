import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ currentPage, setCurrentPage, setSelectedHobby }) => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
    <Container>
      <Navbar.Brand>Hobbies Hub</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link 
            active={currentPage === 'home'}
            onClick={() => {
              setCurrentPage('home');
              setSelectedHobby(null);
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link 
            active={currentPage === 'hobbies'}
            onClick={() => {
              setCurrentPage('hobbies');
              setSelectedHobby(null);
            }}
          >
            Hobbies
          </Nav.Link>
          <Nav.Link 
            active={currentPage === 'about'}
            onClick={() => {
              setCurrentPage('about');
              setSelectedHobby(null);
            }}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;