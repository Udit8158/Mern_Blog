import express from "express";
import register from "../controllers/register.js";
import { body } from "express-validator";
import logIn from "../controllers/logIn.js";
import refresh from "../controllers/refresh.js";
import logOut from "../controllers/logOut.js";

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
