import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      rating: 5,
      text: "Flavora serves the most authentic South Indian food I've had outside of Chennai! The masala dosa is crispy perfection and the filter coffee is heavenly.",
      avatar: "👩",
    },
    {
      name: "Rajesh Kumar",
      role: "Regular Customer",
      rating: 5,
      text: "Best Hyderabadi biryani in town! The flavors are so authentic, it reminds me of my grandmother's cooking. The staff is warm and welcoming.",
      avatar: "👨",
    },
    {
      name: "Ananya Iyer",
      role: "Food Enthusiast",
      rating: 5,
      text: "Finally found a place that does proper Kerala fish curry! The coconut-based gravy and fresh spices make all the difference. Highly recommended!",
      avatar: "👩‍🦰",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <p className="testimonials-subtitle">Real reviews from real people</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
