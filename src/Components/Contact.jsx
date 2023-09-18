


import React, { useState, useEffect } from 'react';
import "../styles/contact.css";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri'

function Contact() {
  const [activeName, setActiveName] = useState('Twitter'); // Set the default name here

  const handleMouseEnter = (name) => {
    setActiveName(name);
  };

  useEffect(() => {
    // Set the default name when the component mounts
    setActiveName('Twitter');
  }, []);

  return (
    <section className="contact-section">
      <h1 className="header">Get in touch</h1>
      <p>Feel free to reach out to me with any inquiries, collaboration opportunities, or just to say hello.
        I'm always excited to connect with fellow developers, designers, and tech enthusiasts.
        Whether you have a project in mind or simply want to chat about the latest trends in web development,
        I'm here to listen and engage. Don't hesitate to drop me a message, and I'll get back to you as soon as
        possible.</p>

<div className="social">
        <h3>Visite my social profile and get connected</h3>
        <div className="socials">
        <div className="social-item" onMouseEnter={() => handleMouseEnter('Twitter')}>
          <FaTwitter className='social-icon' size={"2em"}/>
          <span className={`social-media-name ${activeName === 'Twitter' ? 'active' : ''}`}>Twitter</span>
        </div>
        <div className="social-item" onMouseEnter={() => handleMouseEnter('GitHub')} >
          <FaGithub className='social-icon' size={"2em"}/>
          <span className={`social-media-name ${activeName === 'GitHub' ? 'active' : ''}`}>GitHub</span>
        </div>
        <div className="social-item" onMouseEnter={() => handleMouseEnter('LinkedIn')}>
          <FaLinkedin className='social-icon' size={"2em"}/>
          <span className={`social-media-name ${activeName === 'LinkedIn' ? 'active' : ''}`}>LinkedIn</span>
        </div>
        <div className="social-item" onMouseEnter={() => handleMouseEnter('Frontend Mentor')}>
          <SiFrontendmentor className='social-icon' size={"2em"}/>
          <span className={`social-media-name ${activeName === 'Frontend Mentor' ? 'active' : ''}`}>Frontend Mentor</span>
        </div>
        <div className="social-item" onMouseEnter={() => handleMouseEnter('WhatsApp')}>
          <RiWhatsappFill className='social-icon' size={"2em"}/>
          <span className={`social-media-name ${activeName === 'WhatsApp' ? 'active' : ''}`}>WhatsApp</span>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;



