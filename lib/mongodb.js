const mongoose = require("mongoose");

const MONGODB_URL = process.env.DATABASE_URL;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGO environment variable in .env");
}

async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB.");
      return mongoose;
    }

    console.log("Connecting to MongoDB...");
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URL, opts);
    console.log("Connected to MongoDB successfully.");

    return mongoose;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB.");
  }
}

module.exports = connectToDatabase;
