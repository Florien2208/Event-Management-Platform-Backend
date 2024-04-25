const bcrypt = require("bcrypt");
const { jwtFunction } = require("../middleware/jwtFunction");
const User = require("../models/userModel");
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "wrong password" });
    }

    const Token = jwtFunction({
      _id: user._id,
      email: user.email,
      role: user.role,
    });

    res.status(200).json({
      message: "You have been successful logged in",
      Access_token: Token,
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { Login };
