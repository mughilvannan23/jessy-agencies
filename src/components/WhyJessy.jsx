import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const WhyJessy = () => {
  const reasons = [
    {
      icon: 'bi-shield-lock-fill',
      title: 'Trusted Approach',
      desc: 'Transparency, professionalism and total customer satisfaction in every transaction.',
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Specialized Services',
      desc: 'Dedicated expert solutions crafted for your distinct personal and business needs.',
    },
    {
      icon: 'bi-patch-check-fill',
      title: 'One Trusted Brand',
      desc: 'Multiple essential life services conveniently available under one recognizable brand.',
    },
    {
      icon: 'bi-person-heart',
      title: 'Personal Attention',
      desc: 'We thoroughly understand your requirements before suggesting tailored solutions.',
    },
    {
      icon: 'bi-hand-thumbs-up-fill',
      title: 'Long-Term Relationships',
      desc: 'Focusing on building lasting trust and enduring value with clients and partners.',
    },
  ];

  return (
    <section id="why-jessy" className="section-padding why-section">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge">
              <i className="bi bi-star-fill me-1"></i>
              WHY JESSY
            </div>
            <h2 className="section-title text-white">
              Why People Choose <span className="text-gradient-blue">Jessy Agencies</span>
            </h2>
            <p className="section-subtitle">
              We stand apart through our commitment to integrity, dedicated domain expertise, and customer-first approach.
            </p>
          </motion.div>
        </div>

        <Row className="g-4 justify-content-center">
          {reasons.map((item, idx) => (
            <Col key={idx} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="why-card"
              >
                <div className="why-icon-box">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyJessy;
