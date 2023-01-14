import mongoose from "mongoose";

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
      min: 5,
    },
    author: {
      type: String,
      required: true,
      immutable: true,
    },
    authorProfilePicture: {
      type: String,
      required: true,
    },
    coverPicture: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: {
      type: Array,
      default: [Object],
    },
    catagories: {
      type: [String],
      required: true,
      default: [],
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Blogs", blogSchema);
