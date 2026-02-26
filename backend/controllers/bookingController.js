import Booking from "../models/Booking.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    console.log("[CREATE BOOKING] Request received:", req.body);
    
    const { name, email, phone, date, time, guests, specialRequests } =
      req.body;

    // Validation
    if (!name || !email || !phone || !date || !time || !guests) {
      console.log("[CREATE BOOKING] Validation failed - missing fields");
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    console.log("[CREATE BOOKING] Creating booking in database...");
    const booking = await Booking.create({
      name,
      email,
      phone,
      date,
      time,
      guests,
      specialRequests,
    });

    console.log("[CREATE BOOKING] Success:", booking._id);
    res.status(201).json({
      success: true,
      message: "Booking created successfully!",
      data: booking,
    });
  } catch (error) {
    console.error("[CREATE BOOKING] Error:", error.message);
    console.error("[CREATE BOOKING] Stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
      details: error.toString(),
    });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    console.log("[GET ALL BOOKINGS] Request received");
    const bookings = await Booking.find().sort({ date: 1, time: 1 });
    console.log(`[GET ALL BOOKINGS] Found ${bookings.length} bookings`);

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("[GET ALL BOOKINGS] Error:", error.message);
    console.error("[GET ALL BOOKINGS] Stack:", error.stack);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
      details: error.toString(),
    });
  }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Update booking status
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Delete a booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
