const mongoose = require("mongoose");

const MONGODB_URL = process.env.DATABASE_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable in .env"
  );
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) {
    console.log("Already connected to MongoDB.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URL, { bufferCommands: false });
  }

  cached.conn = await cached.promise;
  console.log("Connected to MongoDB successfully.");

  return cached.conn;
}

module.exports = connectToDatabase;
