import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Journey = () => {
  const journeys = [
    {
      num: '01',
      title: 'Looking for a Job?',
      desc: 'Find executive and workforce career opportunities matching your skillset with Jessy Staffing.',
      btnText: 'Explore Staffing',
      link: 'https://www.staffing.jessyagencies.com/',
      badgeColor: '#10b981',
    },
    {
      num: '02',
      title: 'Looking for Property?',
      desc: 'Discover ideal residential, commercial, and land real estate opportunities with Jessy Real Estate.',
      btnText: 'Explore Real Estate',
      link: 'https://www.realestate.jessyagencies.com/',
      badgeColor: '#38bdf8',
    },
    {
      num: '03',
      title: 'Looking for a Partner?',
      desc: 'Begin your meaningful journey to find a compatible life partner with Jessy Matrimony.',
      btnText: 'Explore Matrimony',
      link: 'https://www.matrimony.jessyagencies.com/',
      badgeColor: '#f43f5e',
    },
  ];

  return (
    <section className="section-padding journey-section">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge custom-badge-gold">
              <i className="bi bi-compass-fill me-1"></i>
              YOUR PERSONAL JOURNEY
            </div>
            <h2 className="section-title section-title-dark">
              Whatever Your Goal, <span className="text-gradient-gold">Start With Jessy</span>
            </h2>
            <p className="section-subtitle section-subtitle-light">
              Select the path that matches your current goal and let us connect you to the right opportunity.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {journeys.map((item, idx) => (
            <Col key={idx} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="journey-card"
              >
                <div className="journey-num">{item.num}</div>
                <h3 className="journey-step-title">{item.title}</h3>
                <p className="journey-step-desc">{item.desc}</p>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jessy-secondary mt-auto"
                >
                  <span>{item.btnText}</span>
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

export default Journey;
