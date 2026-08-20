import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoImg from '../assets/images/jessy-logo.png';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="g-4">
          {/* Column 1: Brand & Tagline */}
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={logoImg}
                alt="Jessy Agencies Logo"
                className="brand-logo-img"
              />
              <span className="footer-brand-name">Jessy Agencies</span>
            </div>
            <p className="footer-tagline">
              Connecting People, Opportunities & Dreams through dedicated staffing, real estate, and matrimonial services.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-jessy">Why Jessy</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Column 3: Our Services */}
          <Col lg={3} md={6}>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>
                <a href="https://staffing.jessyagencies.com/" target="_blank" rel="noopener noreferrer">
                  Jessy Staffing <i className="bi bi-box-arrow-up-right small ms-1"></i>
                </a>
              </li>
              <li>
                <a href="https://realestate.jessyagencies.com/" target="_blank" rel="noopener noreferrer">
                  Jessy Real Estate <i className="bi bi-box-arrow-up-right small ms-1"></i>
                </a>
              </li>
              <li>
                <a href="https://matrimony.jessyagencies.com/" target="_blank" rel="noopener noreferrer">
                  Jessy Matrimony <i className="bi bi-box-arrow-up-right small ms-1"></i>
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 4: Contact Details */}
          <Col lg={3} md={6}>
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-links">
              <li className="text-white font-weight-bold">
                <i className="bi bi-person-fill text-warning me-2"></i>Founder: B. Devaraj
              </li>
              <li>
                <i className="bi bi-phone-fill text-success me-2"></i>
                <a href="tel:8056567352">8056567352</a> / <a href="tel:9487577852">9487577852</a>
              </li>
              <li>
                <i className="bi bi-telephone-fill text-info me-2"></i>
                <a href="tel:04175252535">04175-252535</a>
              </li>
              <li>
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>Tiruvannamalai - 606601
              </li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="mb-0">
            &copy; 2026 Jessy Agencies. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
