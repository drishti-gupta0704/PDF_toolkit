
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// static folders
app.use("/uploads", express.static("uploads"));
app.use("/outputs", express.static("outputs"));

// routes
app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});