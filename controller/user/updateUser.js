const User = require("../../models/userModel");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const rodi = await User.findByIdAndUpdate(id, req.body);
    if (!rodi) {
      return res
        .status(404)
        .json({ message: `can not find  any user with ${id}` });
    }
    console.log(rodi);
    res.status(200).json(rodi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { updateUser };
