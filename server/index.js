import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import multer from "multer";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import blogRoute from "./routes/blog.js";

// Initialize app and port
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

// Initialize storage and upload settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

// Connect to mongoose
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, () => console.log("Connected to DB"));

// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Upload successfuly");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/blogs", blogRoute);

// Listen on server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
