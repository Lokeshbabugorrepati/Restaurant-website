import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo_restaurant.png" alt="Flavora" className="logo-img" />
          <h1>Flavora</h1>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#menu"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#testimonials"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#booking"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Table
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
