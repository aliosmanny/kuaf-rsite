import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">MURAT HAIRSTYLER</a>
        </div>
        <div className="navbar-links">
          <a href="#services" className="nav-link">Hizmetler</a>
          <a href="#about" className="nav-link">Hakkımızda</a>
          <a href="#contact" className="nav-link">İletişim</a>
        </div>
        <div className="navbar-action">
          <a href="#" className="btn-primary btn-small">Randevu Al</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
