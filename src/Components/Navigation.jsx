import React, { useState } from 'react';
import '../styles/navigation.css'
import { FaBars, FaTimes } from 'react-icons/fa'
function Navigation() {
  const [isLinksVisible, setIsLinksVisible] = useState(false);

  const toggleLinks = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <div className='topnav'>
    <button onClick={toggleLinks}>{isLinksVisible ? <FaTimes className='times' /> : <FaBars className='bars' />}
    </button>
    {isLinksVisible && <div className="overlay"></div>}
    <div className={`myLinks ${isLinksVisible ? 'slide-in' : 'slide-out'}`}>
    <a href="#home">Logo</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    </div>
    </div>
  );
}

export default Navigation;



