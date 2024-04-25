const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const Signup = async (req, res) => {
  try {
    const { name, email, phone, location, password,role } = req.body;

    const existingEmail = await User.findOne({ email: email });

    if (existingEmail) {
      return res.status(400).json({
        message: `user with this email:${existingEmail.email} already exists`,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      phone,
      location,
      password: hashedPassword,
      role,
    });

    return res.status(200).json({
      message: "user created successfully",

      users: newUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = { Signup };
