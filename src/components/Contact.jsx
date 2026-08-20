import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Jessy Staffing',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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
      errors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number (digits, min 8 numbers).';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setValidated(true);
      return;
    }

    setFormErrors({});
    setValidated(true);
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="custom-badge">
              <i className="bi bi-chat-dots-fill me-1"></i>
              GET IN TOUCH
            </div>
            <h2 className="section-title text-white">
              Let's <span className="text-gradient-blue">Connect</span>
            </h2>
            <p className="section-subtitle">
              Have a question or want to know more about our services? Get in touch with Jessy Agencies today.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {/* Left Column: Contact Details */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="contact-info-card"
            >
              <h3 className="h4 text-white font-weight-bold mb-4">Contact Information</h3>

              {/* Founder */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <i className="bi bi-person-badge-fill"></i>
                </div>
                <div>
                  <div className="contact-label">Founder</div>
                  <p className="contact-val">B. Devaraj</p>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div className="contact-label">Address</div>
                  <p className="contact-val">
                    No 267, Ramu Army Complex, Vettavalam Road, Enthal Bypass, Tiruvannamalai - 606601
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <i className="bi bi-phone-fill"></i>
                </div>
                <div>
                  <div className="contact-label">Mobile</div>
                  <p className="contact-val">
                    <a href="tel:8056567352" className="text-white text-decoration-none">8056567352</a> / {' '}
                    <a href="tel:9487577852" className="text-white text-decoration-none">9487577852</a>
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="contact-item mb-0">
                <div className="contact-icon-box">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <div className="contact-label">Office</div>
                  <p className="contact-val">
                    <a href="tel:04175252535" className="text-white text-decoration-none">04175-252535</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="contact-form-card"
            >
              {submitted ? (
                <Alert variant="success" className="bg-dark text-white border-success p-4 rounded-3">
                  <h4 className="alert-heading text-gradient-mint mb-2">
                    <i className="bi bi-check-circle-fill me-2"></i>Enquiry Sent Successfully!
                  </h4>
                  <p className="mb-0 text-muted">
                    Thank you, <strong>{formData.fullName}</strong>. Our team will get back to you shortly regarding your enquiry for <strong>{formData.service}</strong>.
                  </p>
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="mt-3"
                    onClick={() => {
                      setSubmitted(false);
                      setValidated(false);
                      setFormErrors({});
                      setFormData({ fullName: '', phone: '', email: '', service: 'Jessy Staffing', message: '' });
                    }}
                  >
                    Send Another Enquiry
                  </Button>
                </Alert>
              ) : (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="fullName">
                        <Form.Label className="text-white small font-weight-bold">Full Name *</Form.Label>
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

                    <Col md={6}>
                      <Form.Group controlId="phone">
                        <Form.Label className="text-white small font-weight-bold">Phone Number *</Form.Label>
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

                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label className="text-white small font-weight-bold">Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="name@example.com (Optional)"
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

                    <Col md={6}>
                      <Form.Group controlId="service">
                        <Form.Label className="text-white small font-weight-bold">Select Service *</Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select-custom"
                        >
                          <option value="Jessy Staffing">Jessy Staffing</option>
                          <option value="Jessy Real Estate">Jessy Real Estate</option>
                          <option value="Jessy Matrimony">Jessy Matrimony</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group controlId="message">
                        <Form.Label className="text-white small font-weight-bold">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="message"
                          placeholder="How can Jessy Agencies help you?"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <button type="submit" className="btn-jessy-primary w-100 justify-content-center mt-2">
                        <span>Send Enquiry</span>
                        <i className="bi bi-send-fill ms-1"></i>
                      </button>
                    </Col>
                  </Row>
                </Form>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
