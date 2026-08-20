import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about-agency.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="about-img-container"
            >
              <img
                src={aboutImg}
                alt="About Jessy Agencies"
                className="about-img"
              />
              <motion.div
                className="about-floating-badge"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="about-badge-num">3-in-1</div>
                <div className="about-badge-text">Trusted Master Brand</div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="custom-badge custom-badge-gold">
                <i className="bi bi-award-fill me-1"></i>
                ABOUT JESSY AGENCIES
              </div>

              <h2 className="section-title text-white">
                Built Around People,{' '}
                <span className="text-gradient-blue">Opportunities</span> &{' '}
                <span className="text-gradient-gold">Possibilities</span>
              </h2>

              <p className="about-text">
                Jessy Agencies is a multi-service organization focused on helping people make better decisions in important areas of life and business.
              </p>

              <p className="about-text">
                From finding the right career opportunity to discovering the right property and finding a meaningful life partner, Jessy Agencies brings specialized services together under one trusted brand.
              </p>

              <div className="d-flex align-items-center gap-4 mt-4">
                <a href="#services" className="btn-jessy-gold">
                  <span>Discover More</span>
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
