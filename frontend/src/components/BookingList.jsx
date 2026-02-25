import React, { useState, useEffect } from "react";
import {
  getAllBookings,
  deleteBooking,
  updateBookingStatus,
} from "../services/api";
import { toast } from "react-toastify";
import "./BookingList.css";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await getAllBookings();
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to fetch bookings");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await deleteBooking(id);
        toast.success("Booking cancelled successfully");
        fetchBookings();
      } catch (error) {
        toast.error("Failed to cancel booking");
      }
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateBookingStatus(id, newStatus);
      toast.success("Booking status updated");
      fetchBookings();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading bookings...</p>
      </div>
    );
  }

  return (
    <section className="bookings-section" id="bookings">
      <div className="bookings-container">
        <div className="bookings-header">
          <h2 className="bookings-title">Current Reservations</h2>
          <div className="filter-buttons">
            <button
              className={filter === "all" ? "filter-btn active" : "filter-btn"}
              onClick={() => setFilter("all")}
            >
              All ({bookings.length})
            </button>
            <button
              className={
                filter === "confirmed" ? "filter-btn active" : "filter-btn"
              }
              onClick={() => setFilter("confirmed")}
            >
              Confirmed
            </button>
            <button
              className={
                filter === "pending" ? "filter-btn active" : "filter-btn"
              }
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>
            <button
              className={
                filter === "cancelled" ? "filter-btn active" : "filter-btn"
              }
              onClick={() => setFilter("cancelled")}
            >
              Cancelled
            </button>
          </div>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="no-bookings">
            <span className="no-bookings-icon">📅</span>
            <p>No bookings found</p>
          </div>
        ) : (
          <div className="bookings-grid">
            {filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className={`booking-card ${booking.status}`}
              >
                <div className="booking-status-badge">{booking.status}</div>

                <div className="booking-info">
                  <h3 className="booking-name">{booking.name}</h3>

                  <div className="booking-detail">
                    <span className="detail-icon">📧</span>
                    <span>{booking.email}</span>
                  </div>

                  <div className="booking-detail">
                    <span className="detail-icon">📞</span>
                    <span>{booking.phone}</span>
                  </div>

                  <div className="booking-detail">
                    <span className="detail-icon">📅</span>
                    <span>{formatDate(booking.date)}</span>
                  </div>

                  <div className="booking-detail">
                    <span className="detail-icon">🕐</span>
                    <span>{booking.time}</span>
                  </div>

                  <div className="booking-detail">
                    <span className="detail-icon">👥</span>
                    <span>
                      {booking.guests}{" "}
                      {booking.guests === 1 ? "Guest" : "Guests"}
                    </span>
                  </div>

                  {booking.specialRequests && (
                    <div className="booking-detail special-request">
                      <span className="detail-icon">💬</span>
                      <span>{booking.specialRequests}</span>
                    </div>
                  )}
                </div>

                <div className="booking-actions">
                  {booking.status === "pending" && (
                    <button
                      className="action-btn confirm-btn"
                      onClick={() =>
                        handleStatusUpdate(booking._id, "confirmed")
                      }
                    >
                      Confirm
                    </button>
                  )}
                  {booking.status === "confirmed" && (
                    <button
                      className="action-btn cancel-btn"
                      onClick={() =>
                        handleStatusUpdate(booking._id, "cancelled")
                      }
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(booking._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingList;
