const User = require("../../models/userModel");

const GetuserbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const rod = await User.findById({ _id: id });
    if (!rod) {
      return res.status(404).json({ message: "the user does not exists" });
    }

    res
      .status(201)
      .json({ message: "user fetched successfully", UserData: rod });
  } catch (error) {
    res.status(500).json({ message: "error occurred", Error: error.message });
  }
};
module.exports = { GetuserbyId };
