import jwt from "jsonwebtoken";
import { createAccessToken } from "./JWT.js";

const refresh = (req, res) => {
  const refreshToken = req.cookies["mern_blog_refresh_token"];

  // Check old refresh token and then generate new access token
  if (!refreshToken) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    const newAccessToken = createAccessToken({
      name: decoded.name,
      email: decoded.email,
      isAdmin: decoded.isAdmin,
      id: decoded.id,
    });
    return res.status(200).json({ access_token: newAccessToken });
  });
};

export default refresh;
