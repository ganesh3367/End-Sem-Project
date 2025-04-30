import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-content container">
        <h1>Contact Us</h1>
        
        <section className="contact-section">
          <p className="welcome-text">
            Thank you for visiting our furniture showcase website. If you have any questions about our collection, 
            want to collaborate, or simply wish to connect, we're here to help.
          </p>
          
          <p className="reach-out-text">
            Feel free to reach out through any of the following ways:
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span className="label">Email:</span>
              <a href="mailto:ganeshwayal55@gmail.com">ganeshwayal55@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <span className="icon">📞</span>
              <span className="label">Phone:</span>
              <a href="tel:+918329793246">+91 8329793246</a>
            </div>
            
            <div className="contact-item">
              <span className="icon">📍</span>
              <span className="label">Location:</span>
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>

          <p className="form-intro">
            Whether you're a customer, designer, or furniture enthusiast, we're always happy to connect 
            and assist. You can also fill out the contact form below, and we'll get back to you as soon as possible.
          </p>
        </section>

        <section className="form-section">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact; 