import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__detail container">
        <b>Management</b>
        <h4>Manager Name</h4>
        <a href="mailto:gilbeltelnino@gmail.com" className="contact__email">
          gilbeltelnino@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Contact;
