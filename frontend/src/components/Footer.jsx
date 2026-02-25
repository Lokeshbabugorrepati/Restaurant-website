import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🍛 Flavora</h3>
          <p>Authentic South Indian cuisine crafted with love and tradition</p>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              📱
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              🐦
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Benz Circle, Vijayawada, Andhra Pradesh</p>
          <p>📞 +91 8978015426</p>
          <p>📧 lokeshbabugorrepati@gmail.com</p>
        </div>

        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday: 11:00 AM - 10:30 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          <p>Breakfast: 10:00 AM - 12:00 PM (Weekends)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Flavora. All rights reserved.</p>
        <p>Made with ❤️ by the Flavora Team</p>
      </div>
    </footer>
  );
};

export default Footer;
