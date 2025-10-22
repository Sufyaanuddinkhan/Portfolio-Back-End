import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ["https://sufyaanuddinportfolio.netlify.app"]
  }));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
