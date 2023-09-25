import React, { useState } from 'react';
import '../styles/navigation.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation({ scrollToRef, aboutRef, servicesRef, skillsRef, portfolioRef, contactRef }) {
  const [isLinksVisible, setIsLinksVisible] = useState(false);


  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <div className="topnav">
      <button onClick={toggleLinks}>
        {isLinksVisible ? (
          <FaTimes className="times" />
        ) : (
          <FaBars className="bars" />
        )}
      </button>
      {isLinksVisible && <div className="overlay"></div>}
      <div className={`myLinks ${isLinksVisible ? 'slide-in' : 'slide-out'}`}>
        <button onClick={() => {scrollToRef(aboutRef); toggleLinks();}}>About</button>
        <button onClick={() => {scrollToRef(servicesRef); toggleLinks(); }}>Services</button>
        <button onClick={() => {scrollToRef(skillsRef); toggleLinks();}}>Skills</button>
        <button onClick={() => {scrollToRef(portfolioRef); toggleLinks();}}>Portfolio</button>
        <button onClick={() => {scrollToRef(contactRef); toggleLinks();}}>Contact</button>
      </div>
    </div>
  );
}

export default Navigation;



