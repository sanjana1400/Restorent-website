import "dotenv/config";  // ✅ Load .env file
import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";  
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json()); // ✅ Enables JSON request body parsing
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));