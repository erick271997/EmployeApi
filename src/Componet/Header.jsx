import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 

 return (
    <>
    <header className="responsive-header">
      <div className="header-logo">
        <Link to="/">Logo</Link>
      </div>
      <button className="header-menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <nav className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
 );
};

export default Header;