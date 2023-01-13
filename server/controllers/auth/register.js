import User from "../../models/User.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { createAccessToken, createRefreshToken } from "./JWT.js";

const register = async (req, res) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, profilePicture } = req.body;
    // console.log(profilePicture);
    const user = await User.findOne({ email });

    // check for conflicting
    if (user) return res.status(409).json({ message: "User already exists" });

    // Generate hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      profilePicture,
    });
    // console.log(newUser);
    await newUser.save();

    const accessToken = createAccessToken({
      name,
      email,
      isAdmin: newUser.isAdmin,
      id: newUser._id,
    });
    const refreshToken = createRefreshToken({
      name,
      email,
      isAdmin: newUser.isAdmin,
    });

    // Destructuring the new user and remove password filed for returning user
    const { password: p, ...resultentUser } = newUser["_doc"];

    res
      .status(201)
      .cookie("mern_blog_refresh_token", refreshToken, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000),
      })
      .json({ ...resultentUser, accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default register;
