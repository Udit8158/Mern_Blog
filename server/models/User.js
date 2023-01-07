import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
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
    isAdmin: {
      type: Boolean,
      default: false,
      immutable: true,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("User", userSchema);
