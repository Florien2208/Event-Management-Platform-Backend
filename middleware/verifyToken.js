import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];



  if (!token)
    return res.status(401).json({ message: "please provide Access_token" });

  jwt.verify(token, process.env.jwt_secret, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid Access_token" });
    req.user = user;
    next();
  });
};
module.exports = { verifyToken };
