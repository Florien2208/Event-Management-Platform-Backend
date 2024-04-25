import jwt from "jsonwebtoken";
export const jwtFunction = (data) => {
  let token = jwt.sign(data, process.env.jwt_secret, {
    expiresIn: process.env.jwt_exp,
  });
  return token;
};
