import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "../backend/config/db.js";
import bookingRoutes from "../backend/routes/bookingRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Initialize MongoDB connection
let dbInitialized = false;
const initializeDB = async () => {
  if (!dbInitialized) {
    try {
      await connectDB();
      dbInitialized = true;
    } catch (error) {
      console.error("Failed to initialize MongoDB:", error);
    }
  }
};

// Connect to MongoDB on first API request
app.use(async (req, res, next) => {
  try {
    await initializeDB();
    next();
  } catch (error) {
    console.error("Database middleware error:", error);
    res.status(500).json({
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// Middleware - Configure CORS for Vercel deployments
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/bookings", bookingRoutes);

export default app;
