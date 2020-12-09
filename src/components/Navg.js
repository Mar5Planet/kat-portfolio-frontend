import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import from 'react-bootstrap/NavbarCollapse'

function Navg() {


    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">KM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#art">Art + Design</Nav.Link>
            <Nav.Link href="#exhibition">Exhibition</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    )
}

export default Navg;