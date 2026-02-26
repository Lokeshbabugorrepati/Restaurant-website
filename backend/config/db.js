import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    console.log("[DB] Using existing MongoDB connection");
    return;
  }

  try {
    console.log("[DB] Attempting to connect to MongoDB...");
    console.log("[DB] MongoDB URI exists:", !!process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    // Log connection string format (without password)
    const uriPreview = process.env.MONGODB_URI.replace(
      /\/\/([^:]+):([^@]+)@/,
      "//***:***@",
    );
    console.log("[DB] Connecting to:", uriPreview);

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log(`[DB] ✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`[DB] Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`[DB] ❌ MongoDB connection error: ${error.message}`);
    console.error(`[DB] Error details:`, error);
    isConnected = false;
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectDB;
