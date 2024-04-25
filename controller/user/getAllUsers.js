const User = require("../../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const rod = await User.find({});
    res.status(200).json(rod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllUsers };
