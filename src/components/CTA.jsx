import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/jessy-logo.png';

const CTA = () => {
  return (
    <section className="section-padding py-5" style={{ background: 'var(--bg-dark-primary)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="cta-section"
        >
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <h2 className="cta-heading">
                Ready to Take Your <span className="text-gradient-blue">Next Step?</span>
              </h2>
              <p className="cta-desc">
                Whether you're looking for a rewarding career, a dream property, or a meaningful life partner, Jessy Agencies is here to support you.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#services" className="btn-jessy-primary">
                  <span>Explore Services</span>
                  <i className="bi bi-grid-fill"></i>
                </a>
                <a href="#contact" className="btn-jessy-gold">
                  <span>Contact Jessy Agencies</span>
                  <i className="bi bi-telephone-fill"></i>
                </a>
              </div>
            </Col>
            
            <Col lg={4} className="text-center d-none d-lg-block">
              <motion.img
                src={logoImg}
                alt="Jessy Agencies Logo"
                className="img-fluid rounded-4 p-3 bg-white shadow-lg"
                style={{ maxHeight: '190px', border: '2px solid rgba(255,255,255,0.4)' }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
