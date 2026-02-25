import React, { useState } from "react";
import { createBooking } from "../services/api";
import { toast } from "react-toastify";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If date changes, reset time selection as available slots differ
    if (name === "date") {
      setFormData({
        ...formData,
        date: value,
        time: "", // Reset time when date changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createBooking(formData);
      toast.success(
        "🎉 Booking Confirmed! We look forward to serving you at Flavora!",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 2,
        specialRequests: "",
      });
    } catch (error) {
      toast.error(
        error.message ||
          "❌ Booking Failed! Please check your details and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split("T")[0];

  // Check if selected date is weekend (Saturday or Sunday)
  const isWeekend = (dateString) => {
    if (!dateString) return false;
    const date = new Date(dateString + "T00:00:00");
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
  };

  // Time slots for weekdays (11 AM onwards)
  const weekdayTimeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  // Time slots for weekends (10 AM onwards)
  const weekendTimeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
  ];

  // Get appropriate time slots based on selected date
  const availableTimeSlots = isWeekend(formData.date)
    ? weekendTimeSlots
    : weekdayTimeSlots;

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        <div className="booking-header">
          <h2 className="booking-title">Reserve Your Table</h2>
          <p className="booking-description">
            Fill in the details below to secure your dining experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="20"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select Time</option>
                {availableTimeSlots.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
              placeholder="Any dietary restrictions, allergies, or special occasions..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Processing Your Booking...
              </>
            ) : (
              <>
                <span className="success-checkmark">🍽️</span>
                Confirm Reservation
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
