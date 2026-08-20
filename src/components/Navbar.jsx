import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/jessy-logo.png';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(isOpen) => setExpanded(isOpen)}
        className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-3">
            <img
              src={logoImg}
              alt="Jessy Agencies Logo"
              className="brand-logo-img"
            />
            <span className="brand-title">Jessy Agencies</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-lg-center my-3 my-lg-0">
              <Nav.Link href="#home" onClick={handleNavLinkClick} className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleNavLinkClick} className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link href="#services" onClick={handleNavLinkClick} className="nav-link-custom">
                Services
              </Nav.Link>
              <Nav.Link href="#why-jessy" onClick={handleNavLinkClick} className="nav-link-custom">
                Why Jessy
              </Nav.Link>
              <Nav.Link href="#process" onClick={handleNavLinkClick} className="nav-link-custom">
                Process
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleNavLinkClick} className="nav-link-custom">
                Contact
              </Nav.Link>
            </Nav>
            
            <div className="d-flex align-items-center">
              <a 
                href="#contact" 
                onClick={handleNavLinkClick} 
                className="btn-jessy-primary"
              >
                <span>Get Started</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default CustomNavbar;
