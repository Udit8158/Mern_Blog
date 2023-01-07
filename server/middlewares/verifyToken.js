import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Check for authorization header and token
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader)
    return res.status(403).json({ message: "Unauthorized" });

  const accessToken = authorizationHeader.split(" ")[1];
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    // If authentication succeeded then set user in the req
    req.user = decoded;
    next();
  });
};

export default verifyToken;
