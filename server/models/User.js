import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      unique: true,
      immutable: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
    pofilePicture: {
      type: String,
      default: "",
    },
    blogs: {
      type: [Object],
      default: [],
    },
    likedBlogs: {
      type: [Object],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      immutable: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("User", userSchema);
