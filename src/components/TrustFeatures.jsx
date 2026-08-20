import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TrustFeatures = () => {
  const features = [
    {
      icon: 'bi-shield-check',
      title: 'Trusted Approach',
      desc: 'Professional and customer-focused service built on transparency.',
    },
    {
      icon: 'bi-grid-1x2-fill',
      title: 'Multiple Solutions',
      desc: 'Three specialized services under one unified brand.',
    },
    {
      icon: 'bi-people-fill',
      title: 'People First',
      desc: 'Solutions thoughtfully designed around real customer needs.',
    },
    {
      icon: 'bi-headset',
      title: 'Reliable Support',
      desc: 'Dedicated guidance whenever you need assistance.',
    },
  ];

  return (
    <section className="trust-strip">
      <Container>
        <Row className="g-4">
          {features.map((feature, idx) => (
            <Col key={idx} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="trust-card"
              >
                <div className="trust-icon-box">
                  <i className={`bi ${feature.icon}`}></i>
                </div>
                <div>
                  <h4 className="trust-title">{feature.title}</h4>
                  <p className="trust-desc">{feature.desc}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustFeatures;
