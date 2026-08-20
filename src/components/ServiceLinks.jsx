import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ServiceLinks = () => {
  const links = [
    {
      title: 'Jessy Staffing',
      url: 'staffing.jessyagencies.com',
      href: 'https://staffing.jessyagencies.com/',
      icon: 'bi-briefcase-fill',
    },
    {
      title: 'Jessy Real Estate',
      url: 'realestate.jessyagencies.com',
      href: 'https://realestate.jessyagencies.com/',
      icon: 'bi-building-fill',
    },
    {
      title: 'Jessy Matrimony',
      url: 'matrimony.jessyagencies.com',
      href: 'https://matrimony.jessyagencies.com/',
      icon: 'bi-heart-fill',
    },
  ];

  return (
    <section className="service-links-section">
      <Container>
        <Row className="g-4">
          {links.map((item, idx) => (
            <Col key={idx} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="gateway-card"
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="trust-icon-box"
                    style={{ width: '42px', height: '42px', fontSize: '1.2rem' }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="gateway-title">{item.title}</h4>
                    <p className="gateway-url">{item.url}</p>
                  </div>
                </div>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jessy-secondary py-2 px-3 small"
                  style={{ fontSize: '0.85rem' }}
                >
                  <span>Visit Website</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceLinks;
