import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

// Initialize app
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Connect to mongoose
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, () => console.log("Connected to DB"));

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
// Listen on server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
