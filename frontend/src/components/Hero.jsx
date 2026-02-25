import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Flavora</h1>
        <p className="hero-subtitle">
          Experience the Authentic Taste of South India
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🍛</span>
            <span>Traditional Recipes</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌶️</span>
            <span>Aromatic Spices</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🥥</span>
            <span>Fresh Ingredients</span>
          </div>
        </div>
        <a href="#booking" className="hero-btn">
          Reserve Your Table
        </a>
      </div>
    </section>
  );
};

export default Hero;
