import React from "react";
import logo from "../assets/footer-logo.svg";
import element from "../assets/element.svg"
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <img src={logo} alt="Trafalgar" />
          <p className="max">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className="footer-item">
          <p className="footer-item-header">Company</p>
          <p className="pointer">About</p>
          <p className="pointer">Testimonials</p>
          <p className="pointer">Find a doctor</p>
          <p className="pointer">Apps</p>
        </div>
        <div className="footer-item">
        <p className="footer-item-header">Region</p>
          <p className="pointer">Indonesia</p>
          <p className="pointer">Singapore</p>
          <p className="pointer">Hongkong</p>
          <p className="pointer">Canada</p>
        </div>
        <div className="footer-item">
        <p className="footer-item-header">Help</p>
          <p className="pointer">Help center</p>
          <p className="pointer">Contact support</p>
          <p className="pointer">Instructions</p>
          <p className="pointer">How it works</p>
        </div>
      </div>
      <img src={element} alt="" className="img"/>
    </footer>
  );
};

export default Footer;
