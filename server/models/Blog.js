import mongoose, { mongo } from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 5,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      immutable: true,
    },
    coverPicture: {
      type: String,
      required: true,
      default: "",
    },
    likes: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array,
      required: true,
      default: [],
      max: 3,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Blogs", blogSchema);