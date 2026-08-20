import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/jessy-logo.png';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'why-jessy', 'process', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setExpanded(false);
    
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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
          <Navbar.Brand
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="d-flex align-items-center gap-3"
          >
            <img
              src={logoImg}
              alt="Jessy Agencies Logo"
              className="brand-logo-img"
            />

            <span className="brand-title">
              Jessy Agencies
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-lg-center my-3 my-lg-0">

              <Nav.Link
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className={`nav-link-custom ${activeSection === 'services' ? 'active' : ''}`}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href="#why-jessy"
                onClick={(e) => handleNavClick(e, 'why-jessy')}
                className={`nav-link-custom ${activeSection === 'why-jessy' ? 'active' : ''}`}
              >
                Why Jessy
              </Nav.Link>

              <Nav.Link
                href="#process"
                onClick={(e) => handleNavClick(e, 'process')}
                className={`nav-link-custom ${activeSection === 'process' ? 'active' : ''}`}
              >
                Process
              </Nav.Link>

              <Nav.Link
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </Nav.Link>

            </Nav>

            <div className="d-flex align-items-center">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
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