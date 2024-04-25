const User = require("../../models/userModel");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const rod = await User.findByIdAndDelete({ _id: id });
    if (!rod) {
      return res.status(501).json({ message: "user not found" });
    }
    res
      .status(201)
      .json({ message: "message deleted successfully", data: rod });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "error occurred during deleting",
        Error: error.message,
      });
  }
};
module.exports = { deleteUser };
