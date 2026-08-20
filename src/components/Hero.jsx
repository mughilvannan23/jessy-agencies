import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroVisual from '../assets/images/hero-visual.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          <Col lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <div className="custom-badge">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  WELCOME TO JESSY AGENCIES
                </div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="hero-heading">
                One Trusted Name.{' '}
                <span className="text-gradient-blue">Three Powerful</span>{' '}
                <span className="text-gradient-gold">Services.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-description">
                Connecting people with the right career opportunities, premium properties, and lifelong partners through our dedicated professional services.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3 hero-btn-group">
                <a href="#services" className="btn-jessy-primary">
                  <span>Explore Our Services</span>
                  <i className="bi bi-arrow-down-circle-fill"></i>
                </a>
                <a href="#contact" className="btn-jessy-secondary-dark">
                  <span>Contact Us</span>
                  <i className="bi bi-envelope"></i>
                </a>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="hero-visual-wrapper"
            >
              <div className="hero-img-relative-wrapper">
                {/* Main Image Container */}
                <div className="hero-main-img-container">
                  <img
                    src={heroVisual}
                    alt="Jessy Agencies Services"
                    className="hero-main-img"
                  />
                  <div className="hero-img-overlay"></div>
                </div>

                {/* Floating Cards Group */}
                <div className="floating-cards-group">
                  {/* Floating Card 1: Staffing */}
                  <motion.div
                    className="floating-card floating-card-1"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="floating-icon icon-staffing">
                      <i className="bi bi-briefcase-fill"></i>
                    </div>
                    <div>
                      <div className="floating-tag">Jessy Staffing</div>
                      <div className="floating-title">Career Opportunities</div>
                    </div>
                  </motion.div>

                  {/* Floating Card 2: Real Estate */}
                  <motion.div
                    className="floating-card floating-card-2"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 4.5,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="floating-icon icon-realestate">
                      <i className="bi bi-house-door-fill"></i>
                    </div>
                    <div>
                      <div className="floating-tag" style={{ color: '#38bdf8' }}>
                        Jessy Real Estate
                      </div>
                      <div className="floating-title">Property Solutions</div>
                    </div>
                  </motion.div>

                  {/* Floating Card 3: Matrimony */}
                  <motion.div
                    className="floating-card floating-card-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3.8,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="floating-icon icon-matrimony">
                      <i className="bi bi-heart-fill"></i>
                    </div>
                    <div>
                      <div className="floating-tag" style={{ color: '#f43f5e' }}>
                        Jessy Matrimony
                      </div>
                      <div className="floating-title">Find Your Match</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
