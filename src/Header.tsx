import React from 'react';
import './App.css'
import { Route, Link, BrowserRouter as Router, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About';
import Contact from './Trophies';
import Home from './Home';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      //https://react-bootstrap.github.io/components/navbar/
      <Navbar bg="black" expand="lg"  >
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-lg-5">
              <Link to="/">Home</Link>
              <Link to="/players">Players</Link>
              <Link to="/trophies">Trophies</Link>
              <Link to="/history">History</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header
