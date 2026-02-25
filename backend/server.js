import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB on first request (for serverless)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ message: 'Database connection failed', error: error.message });
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Restaurant Booking API" });
});

app.use("/api/bookings", bookingRoutes);

// Start server (only in non-production environment)
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel serverless
export default app;
