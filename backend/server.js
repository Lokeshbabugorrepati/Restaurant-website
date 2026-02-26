import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware - Configure CORS for Vercel deployments (MUST be before routes)
app.use(
  cors({
    origin: true, // Allow all origins
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize MongoDB connection
let dbInitialized = false;
const initializeDB = async () => {
  if (!dbInitialized) {
    try {
      await connectDB();
      dbInitialized = true;
      console.log("MongoDB initialized successfully");
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
      env: process.env.MONGODB_URI ? "URI exists" : "URI missing",
    });
  }
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Restaurant Booking API" });
});

app.use("/api/bookings", bookingRoutes);

// Start server (for local development only)
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} else {
  // For Vercel serverless - initialize DB on cold start
  initializeDB();
}

// Export for Vercel serverless
export default app;
