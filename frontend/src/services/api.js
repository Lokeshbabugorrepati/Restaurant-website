import axios from "axios";

// Use relative path in production (same domain), absolute in development
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "production"
    ? "/api"
    : "http://localhost:5000/api");

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getBookingById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateBookingStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}/bookings/${id}`, { status });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteBooking = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
