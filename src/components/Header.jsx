import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      <Navbar expanded={expanded} expand="lg" className="navbar-custom">
        <Link to="/" className="navbar-brand">Home</Link>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
          className="bg-dark"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/portfolio" className="nav-link">| Portfolio</Link>
            <a href="#work-history" className="nav-link">| Work History</a>
            <a href="#contact" className="nav-link">| Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;