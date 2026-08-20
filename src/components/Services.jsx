import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      id: 'staffing',
      cardClass: 'card-staffing',
      icon: 'bi-briefcase-fill',
      iconBg: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10b981',
      title: 'Jessy Staffing',
      desc: 'Connecting talented people with the right career opportunities and helping businesses find the right workforce.',
      features: [
        'Recruitment & Staffing',
        'Candidate Opportunities',
        'Employer Support',
        'Professional Assistance',
      ],
      link: 'https://www.staffing.jessyagencies.com/',
      btnText: 'Visit Jessy Staffing',
    },
    {
      id: 'realestate',
      cardClass: 'card-realestate',
      icon: 'bi-house-door-fill',
      iconBg: 'rgba(56, 189, 248, 0.15)',
      iconColor: '#38bdf8',
      title: 'Jessy Real Estate',
      desc: 'Helping you discover properties and real estate opportunities that match your needs, goals and budget.',
      features: [
        'Property Assistance',
        'Buying & Selling Support',
        'Real Estate Opportunities',
        'Personalized Guidance',
      ],
      link: 'https://www.realestate.jessyagencies.com/',
      btnText: 'Visit Jessy Real Estate',
    },
    {
      id: 'matrimony',
      cardClass: 'card-matrimony',
      icon: 'bi-heart-fill',
      iconBg: 'rgba(244, 63, 94, 0.15)',
      iconColor: '#f43f5e',
      title: 'Jessy Matrimony',
      desc: 'Helping individuals and families connect with compatible partners and take the next step toward a meaningful relationship.',
      features: [
        'Matrimonial Profiles',
        'Partner Search',
        'Family-Friendly Approach',
        'Relationship-Focused Service',
      ],
      link: 'https://www.matrimony.jessyagencies.com/',
      btnText: 'Visit Jessy Matrimony',
    },
  ];

  return (
    <section id="services" className="section-padding services-section">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge custom-badge-light-bg">
              <i className="bi bi-layers-fill me-1"></i>
              OUR CORE SERVICES
            </div>
            <h2 className="section-title section-title-dark">
              Three Services. <span className="text-gradient-blue">One Trusted Agency.</span>
            </h2>
            <p className="section-subtitle section-subtitle-light">
              Explore our specialized services designed to connect you with the right opportunities across employment, real estate, and life partnerships.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {servicesData.map((service, idx) => (
            <Col key={service.id} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`service-card-main ${service.cardClass}`}
              >
                <div
                  className="service-icon-wrapper"
                  style={{ background: service.iconBg, color: service.iconColor }}
                >
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <ul className="service-features-list">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-jessy-primary service-btn"
                  >
                    <span>{service.btnText}</span>
                    <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
