require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/slider", require("./routes/sliderRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes.js"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/mail", require("./routes/mailRoutes"));
app.use("/api/newsletter", require("./routes/newsletterRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port http://localhost:${process.env.PORT}`)
);
