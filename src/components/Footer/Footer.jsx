import React from 'react';
import './Footer.scss';
import logo from '../../assets/images/logo.png';

const Footer = () => (
    <footer className="footer bg-green">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="the sustainable tour logo"></img>
      </div>
    </footer>
  );
  
  export default Footer;