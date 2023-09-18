  
import React, { useState, useEffect } from 'react';
import "../styles/footer.css";
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

function Footer() {
  const [activeName, setActiveName] = useState('Twitter'); // Set the default name here

  const handleMouseEnter = (name) => {
    setActiveName(name);
  };

  useEffect(() => {
    // Set the default name when the component mounts
    setActiveName('Twitter'); // Change this to the desired default name
  }, []);

  return (
    <footer>
      <p>&copy; 2023. Developed by John. All rights reserved</p>
     
      </footer>
  );
}

export default Footer;



