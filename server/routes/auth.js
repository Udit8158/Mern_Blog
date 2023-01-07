import express from "express";
import { body } from "express-validator";
import register from "../controllers/auth/register.js";
import logIn from "../controllers/auth/logIn.js";
import refresh from "../controllers/auth/refresh.js";
import logOut from "../controllers/auth/logOut.js";

const authRoute = express();

authRoute.post(
  "/register",
  [
    body("name").isLength(3),
    body("email").isEmail(),
    body("password").isLength(6),
  ],
  register
);

authRoute.post(
  "/login",
  [body("email").isEmail(), body("password").isLength(6)],
  logIn
);

authRoute.get("/refresh", refresh);
authRoute.get("/logout", logOut);

export default authRoute;
