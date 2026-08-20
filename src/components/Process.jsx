import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Service',
      desc: 'Select from Jessy Staffing, Real Estate, or Matrimony based on your immediate need.',
    },
    {
      num: '02',
      title: 'Explore Your Options',
      desc: 'Review curated job openings, property listings, or matrimonial profiles.',
    },
    {
      num: '03',
      title: 'Connect With Us',
      desc: 'Reach out to our specialized team for personalized assistance and consultations.',
    },
    {
      num: '04',
      title: 'Take the Next Step',
      desc: 'Move forward with clarity and confidence knowing you have a trusted partner.',
    },
  ];

  return (
    <section id="process" className="section-padding process-section">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge custom-badge-light-bg">
              <i className="bi bi-diagram-2-fill me-1"></i>
              HOW IT WORKS
            </div>
            <h2 className="section-title section-title-dark">
              A Simple Way to <span className="text-gradient-blue">Get Started</span>
            </h2>
            <p className="section-subtitle section-subtitle-light">
              Four straightforward steps to achieving your career, property, or matrimonial aspirations.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {steps.map((step, idx) => (
            <Col key={idx} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="process-card"
              >
                <div className="process-bg-num">{step.num}</div>
                <h3 className="process-title">{step.num}. {step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Process;
