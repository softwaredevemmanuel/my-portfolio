import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Replace with your actual API endpoint
    try {
      // await axios.post('/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Contact information</h4>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-12">
          <div className="art-a art-card">
            <div className="art-table p-15-15">
              <ul>
                <li><h6>Country:</h6><span>Nigeria</span></li>
                <li><h6>City:</h6><span>Lagos</span></li>
                <li><h6>Email:</h6><span><a href="mailto:eokereke47@gmail.com">eokereke47@gmail.com</a></span></li>
                <li><h6>whatsapp:</h6><span><a href="https://wa.me/+2348037819461">+2348037819461</a></span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Get in touch</h4>
            </div>
          </div>

          <div className="art-a art-card">
            <form id="form" className="art-contact-form" onSubmit={handleSubmit}>
              <div className="art-form-field">
                <input 
                  id="name" 
                  name="name" 
                  className="art-input" 
                  type="text" 
                  placeholder="Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name"><i className="fas fa-user"></i></label>
              </div>
              <div className="art-form-field">
                <input 
                  id="email" 
                  name="email" 
                  className="art-input" 
                  type="email" 
                  placeholder="Email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email"><i className="fas fa-at"></i></label>
              </div>
              <div className="art-form-field">
                <textarea 
                  id="message" 
                  name="message" 
                  className="art-input" 
                  placeholder="Message"
                  required 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message"><i className="far fa-envelope"></i></label>
              </div>
              <div className="art-submit-frame">
                <button className="art-btn art-btn-md art-submit" type="submit">
                  <span>Send message</span>
                </button>
                {status === 'success' && (
                  <div className="art-success">Success <i className="fas fa-check"></i></div>
                )}
                {status === 'error' && (
                  <div className="art-error">Error sending message</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;