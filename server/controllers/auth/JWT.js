import jwt from "jsonwebtoken";

export const createAccessToken = (user) =>
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });

export const createRefreshToken = (user) =>
  jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
