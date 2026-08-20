import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsList = [
    { number: '03', label: 'Specialized Services' },
    { number: '01', label: 'Trusted Brand' },
    { number: '24/7', label: 'Online Access' },
    { number: '100%', label: 'Customer Focus' },
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row className="g-4">
          {statsList.map((stat, idx) => (
            <Col key={idx} lg={3} sm={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="stat-item"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
