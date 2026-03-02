require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB (still local for now — we change next step)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected 🚀"))
  .catch((err) => {
    console.error("MongoDB Connection Error ❌", err);
    process.exit(1);
  });

// Routes
app.use("/api", require("./routes/teamRoutes"));
app.use("/api", require("./routes/staffRoutes"));

// Static uploads
app.use("/uploads", express.static("uploads"));

// Use PORT from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🔥`)
);