import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>MURAT HAIRSTYLER</h3>
          <p>Kendinizi Yeniden Keşfedin.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Adres</h4>
            <p>Nişantaşı, Teşvikiye Cd.<br/>Şişli, İstanbul</p>
          </div>
          <div className="footer-col">
            <h4>İletişim</h4>
            <p>+90 555 123 45 67<br/>hello@murathairstyler.com</p>
          </div>
          <div className="footer-col">
            <h4>Sosyal Medya</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Murat HairStyler. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
