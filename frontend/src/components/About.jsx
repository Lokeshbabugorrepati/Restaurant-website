import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Flavora</h2>
          <p className="about-description">
            Hi! Welcome to Flavora. We started this place in 2025 because we
            really love South Indian food and wanted to share it with everyone.
            Our dosas are crispy, biryanis are flavorful, and the curries taste
            just like homemade food.
          </p>
          <p className="about-description">
            Everything here is made fresh daily. We get our spices from trusted
            suppliers and our recipes come from family traditions. If you love
            authentic South Indian taste, you'll feel right at home here!
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>1+</h3>
              <p>Year Serving</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Menu Items</p>
            </div>
            <div className="stat">
              <h3>2K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>4.8★</h3>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/about_restaurant.png" alt="Flavora Restaurant" />
        </div>
      </div>
    </section>
  );
};

export default About;
