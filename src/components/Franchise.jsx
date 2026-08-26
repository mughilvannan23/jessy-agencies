import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Franchise = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    franchiseService: 'Jessy Staffing',
    investmentRange: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const franchiseCards = [
    {
      id: 'staffing-franchise',
      number: '01',
      title: 'Jessy Staffing Franchise',
      serviceKey: 'Jessy Staffing',
      icon: 'bi-briefcase-fill',
      accentColor: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.15)',
      desc: 'Start your own staffing and recruitment business with the Jessy Staffing brand. Connect job seekers with career opportunities and help businesses find the right workforce.',
      btnText: 'Enquire for Staffing Franchise',
    },
    {
      id: 'realestate-franchise',
      number: '02',
      title: 'Jessy Real Estate Franchise',
      serviceKey: 'Jessy Real Estate',
      icon: 'bi-house-door-fill',
      accentColor: '#1d70b8',
      bgGlow: 'rgba(29, 112, 184, 0.15)',
      desc: 'Build a real estate business with the Jessy Real Estate brand and assist customers with property buying, selling, and real estate opportunities.',
      btnText: 'Enquire for Real Estate Franchise',
    },
    {
      id: 'matrimony-franchise',
      number: '03',
      title: 'Jessy Matrimony Franchise',
      serviceKey: 'Jessy Matrimony',
      icon: 'bi-heart-fill',
      accentColor: '#e5a93c',
      bgGlow: 'rgba(229, 169, 60, 0.15)',
      desc: 'Become a local representative of Jessy Matrimony and help individuals and families find suitable life partners through a trusted matrimonial service.',
      btnText: 'Enquire for Matrimony Franchise',
    },
  ];

  const whyPartnerFeatures = [
    {
      icon: 'bi-patch-check-fill',
      title: 'Trusted Brand',
      desc: 'Grow your business under the established Jessy Agencies brand.',
    },
    {
      icon: 'bi-grid-1x2-fill',
      title: 'Multiple Business Opportunities',
      desc: 'Choose from Staffing, Real Estate, or Matrimony services.',
    },
    {
      icon: 'bi-mortarboard-fill',
      title: 'Professional Guidance',
      desc: 'Receive support and guidance to help establish and operate your franchise.',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Growth Opportunity',
      desc: 'Build a sustainable local business while becoming part of the Jessy Agencies network.',
    },
  ];

  const handleOpenModal = (serviceName = 'Jessy Staffing') => {
    setFormData((prev) => ({
      ...prev,
      franchiseService: serviceName,
    }));
    setSendError('');
    setValidated(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: null,
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }

    const phoneRegex = /^[0-9+\s\-]{8,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your mobile number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid mobile number (digits, min 8 numbers).';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.location.trim()) {
      errors.location = 'Please enter your city or location.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError('');
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setValidated(true);
      return;
    }

    setFormErrors({});
    setValidated(true);
    setSending(true);

    const whatsappNumber = '918056567352';
    const whatsappMessage = `*New Franchise Enquiry - Jessy Agencies*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.fullName.trim()}
📱 *Mobile Number:* ${formData.phone.trim()}
📧 *Email Address:* ${formData.email.trim() || 'Not Provided'}
📍 *City / Location:* ${formData.location.trim()}
💼 *Interested Franchise:* ${formData.franchiseService}
💰 *Investment Range:* ${formData.investmentRange || 'Not Specified'}
💬 *Message:* ${formData.message.trim() || 'No additional message'}
━━━━━━━━━━━━━━━━━━━━
Sent from Jessy Agencies Portal`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const templateParams = {
      from_name: formData.fullName,
      phone: formData.phone,
      reply_to: formData.email || formData.phone,
      email: formData.email || 'Not provided',
      service: `FRANCHISE ENQUIRY: ${formData.franchiseService}`,
      location: formData.location,
      investment: formData.investmentRange || 'Not specified',
      message: `City/Location: ${formData.location}\nInterested Franchise: ${formData.franchiseService}\nInvestment Range: ${formData.investmentRange || 'Not specified'}\nMessage: ${formData.message || 'No additional message'}`,
    };

    try {
      if (
        SERVICE_ID &&
        TEMPLATE_ID &&
        PUBLIC_KEY &&
        SERVICE_ID !== 'YOUR_SERVICE_ID'
      ) {
        // Background email notification
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).catch((err) => {
          console.warn('EmailJS background send warning:', err);
        });
      }
    } catch (err) {
      console.warn('EmailJS error:', err);
    }

    setSending(false);
    setSubmitted(true);
    setSubmittedWhatsappUrl(whatsappUrl);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.5 },
      });
    } catch (err) {
      console.log(err);
    }

    // Redirect to WhatsApp with pre-filled details
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="franchise" className="section-padding franchise-section">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge custom-badge-light-bg">
              <i className="bi bi-briefcase-fill me-1"></i>
              FRANCHISE OPPORTUNITY
            </div>
            <h2 className="section-title section-title-dark">
              Build Your Own Business With{' '}
              <span className="text-gradient-blue">Jessy Agencies</span>
            </h2>
            <p className="section-subtitle section-subtitle-light">
              Turn your entrepreneurial goals into a business opportunity with the trusted Jessy Agencies brand. We offer franchise opportunities for our specialized services, allowing passionate individuals and business partners to grow with an established multi-service brand.
            </p>
          </motion.div>
        </div>

        {/* 3 Franchise Cards */}
        <Row className="g-4 mb-5">
          {franchiseCards.map((card, idx) => (
            <Col key={card.id} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="franchise-service-card"
              >
                <div className="franchise-card-header">
                  <div
                    className="franchise-icon-box"
                    style={{ background: card.bgGlow, color: card.accentColor }}
                  >
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <span className="franchise-num-badge">{card.number}</span>
                </div>

                <h3 className="franchise-card-title">{card.title}</h3>
                <p className="franchise-card-desc">{card.desc}</p>

                <div className="mt-auto pt-3">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(card.serviceKey)}
                    className="btn-jessy-primary w-100 justify-content-center franchise-card-btn"
                  >
                    <span>{card.btnText}</span>
                    <i className="bi bi-arrow-right-short fs-5"></i>
                  </button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Why Become a Jessy Franchise Partner? */}
        <div className="why-partner-wrapper mb-5">
          <div className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="h2 font-weight-bold mb-3" style={{ color: 'var(--text-light-primary)' }}>
                Why Become a <span className="text-gradient-blue">Jessy Franchise Partner?</span>
              </h3>
              <p className="section-subtitle section-subtitle-light mb-0">
                Partner with a reputable brand that provides comprehensive guidance, verified business models, and continuous backing.
              </p>
            </motion.div>
          </div>

          <Row className="g-4">
            {whyPartnerFeatures.map((feat, idx) => (
              <Col key={idx} lg={3} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="why-partner-card"
                >
                  <div className="why-partner-icon-box">
                    <i className={`bi ${feat.icon}`}></i>
                  </div>
                  <h4 className="why-partner-title">{feat.title}</h4>
                  <p className="why-partner-desc">{feat.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Franchise Enquiry CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="franchise-cta-box"
        >
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <h3 className="franchise-cta-title">
                Ready to Start Your <span className="text-gradient-gold">Jessy Franchise?</span>
              </h3>
              <p className="franchise-cta-desc mb-0">
                Interested in becoming a Jessy Agencies franchise partner? Contact our team to learn about franchise opportunities, requirements, support, and the next steps.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end">
                <button
                  type="button"
                  onClick={() => handleOpenModal('Multiple Services')}
                  className="btn-jessy-gold"
                >
                  <span>Become a Franchise Partner</span>
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
                <a href="#contact" className="btn-jessy-secondary-dark">
                  <span>Contact Us</span>
                  <i className="bi bi-telephone-fill"></i>
                </a>
              </div>
            </Col>
          </Row>
        </motion.div>

        {/* POPUP MODAL FOR FRANCHISE ENQUIRY */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          centered
          size="lg"
          className="franchise-modal-backdrop"
          contentClassName="franchise-modal-content"
        >
          <Modal.Header closeButton closeVariant="white" className="franchise-modal-header border-0 pb-0">
            <div>
              <div className="custom-badge custom-badge-light-bg mb-2">
                <i className="bi bi-clipboard-check-fill me-1"></i>
                EXPRESSION OF INTEREST
              </div>
              <Modal.Title className="text-white font-weight-bold h3 mb-1">
                Franchise Application Form
              </Modal.Title>
              <p className="text-muted small mb-0">
                Fill out the form below and our franchise development team will reach out to discuss the opportunity.
              </p>
            </div>
          </Modal.Header>

          <Modal.Body className="franchise-modal-body pt-3 pb-4 px-4">
            {submitted ? (
              <Alert variant="success" className="bg-dark text-white border-success p-4 rounded-3 text-center my-3">
                <h4 className="alert-heading text-gradient-mint mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>Franchise Enquiry Submitted!
                </h4>
                <p className="text-white small mb-2">
                  Opening <strong>WhatsApp</strong> with your application details to connect directly with the Jessy Agencies team...
                </p>
                <p className="text-muted small mb-4">
                  If WhatsApp did not open automatically, click the button below:
                </p>
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
                  {submittedWhatsappUrl && (
                    <a
                      href={submittedWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success d-inline-flex align-items-center gap-2 px-3 py-2 fw-bold"
                    >
                      <i className="bi bi-whatsapp fs-5"></i>
                      <span>Open in WhatsApp</span>
                    </a>
                  )}
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="px-3"
                    onClick={() => {
                      setSubmitted(false);
                      setValidated(false);
                      setSendError('');
                      setFormErrors({});
                      setSubmittedWhatsappUrl('');
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        location: '',
                        franchiseService: 'Jessy Staffing',
                        investmentRange: '',
                        message: '',
                      });
                    }}
                  >
                    New Enquiry
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="px-3"
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                </div>
              </Alert>
            ) : (
              <Form noValidate onSubmit={handleSubmit} className="mt-2">
                {sendError && (
                  <Alert variant="danger" className="bg-dark text-danger border-danger mb-3 p-3 rounded-3">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {sendError}
                  </Alert>
                )}

                <Row className="g-3">
                  {/* Full Name */}
                  <Col md={6}>
                    <Form.Group controlId="popupFullName">
                      <Form.Label className="text-white small font-weight-bold">
                        Full Name *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={!!formErrors.fullName}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.fullName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* Mobile Number */}
                  <Col md={6}>
                    <Form.Group controlId="popupPhone">
                      <Form.Label className="text-white small font-weight-bold">
                        Mobile Number *
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Your Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!formErrors.phone}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* Email Address */}
                  <Col md={6}>
                    <Form.Group controlId="popupEmail">
                      <Form.Label className="text-white small font-weight-bold">
                        Email Address (Optional)
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!formErrors.email}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* City / Location */}
                  <Col md={6}>
                    <Form.Group controlId="popupLocation">
                      <Form.Label className="text-white small font-weight-bold">
                        City / Location *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        placeholder="e.g. Tiruvannamalai, Vellore, Chennai"
                        value={formData.location}
                        onChange={handleChange}
                        isInvalid={!!formErrors.location}
                        className="form-control-custom"
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.location}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  {/* Interested Franchise */}
                  <Col md={6}>
                    <Form.Group controlId="popupFranchiseService">
                      <Form.Label className="text-white small font-weight-bold">
                        Interested Franchise *
                      </Form.Label>
                      <Form.Select
                        name="franchiseService"
                        value={formData.franchiseService}
                        onChange={handleChange}
                        className="form-select-custom"
                      >
                        <option value="Jessy Staffing">Jessy Staffing</option>
                        <option value="Jessy Real Estate">Jessy Real Estate</option>
                        <option value="Jessy Matrimony">Jessy Matrimony</option>
                        <option value="Multiple Services">Multiple Services</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Investment Range */}
                  <Col md={6}>
                    <Form.Group controlId="popupInvestment">
                      <Form.Label className="text-white small font-weight-bold">
                        Investment Range (Optional)
                      </Form.Label>
                      <Form.Select
                        name="investmentRange"
                        value={formData.investmentRange}
                        onChange={handleChange}
                        className="form-select-custom"
                      >
                        <option value="">Select Investment Range</option>
                        <option value="Below ₹2 Lakhs">Below ₹2 Lakhs</option>
                        <option value="₹2 - ₹5 Lakhs">₹2 - ₹5 Lakhs</option>
                        <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
                        <option value="Above ₹10 Lakhs">Above ₹10 Lakhs</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Message */}
                  <Col md={12}>
                    <Form.Group controlId="popupMessage">
                      <Form.Label className="text-white small font-weight-bold">
                        Message (Optional)
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Tell us about your background, business experience, or target area..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control-custom"
                      />
                    </Form.Group>
                  </Col>

                  {/* Submit Button */}
                  <Col md={12}>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-jessy-gold w-100 justify-content-center mt-2"
                    >
                      {sending ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Franchise Enquiry</span>
                          <i className="bi bi-send-fill ms-1"></i>
                        </>
                      )}
                    </button>
                  </Col>
                </Row>
              </Form>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Franchise;
