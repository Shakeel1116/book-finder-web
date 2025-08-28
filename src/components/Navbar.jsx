import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function NavbarComp() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>📚 Book Finder</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
