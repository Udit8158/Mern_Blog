import User from "../../models/User.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { createAccessToken, createRefreshToken } from "./JWT.js";

const logIn = async (req, res) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // check for user existance
    if (!user) return res.status(404).json({ message: "Wrong Credentials!" });

    // check password
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched)
      return res.status(404).json({ message: "Wrong Credentials!" });

    const accessToken = createAccessToken({ name: user.name, email });
    const refreshToken = createRefreshToken({ name: user.name, email });

    res
      .status(201)
      .cookie("mern_blog_refresh_token", refreshToken, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(new Date().getTime() + 24 * 7 * 60 * 60 * 1000),
      })
      .json({ name: user.name, email: user.email, accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default logIn;
