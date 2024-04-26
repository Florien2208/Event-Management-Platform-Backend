const event = require("../../models/eventModal");


const GetEventbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const rod = await event.findById({ _id: id });
    if (!rod) {
      return res.status(404).json({ message: "the Event does not exists" });
    }

    res
      .status(201)
      .json({ message: "Event fetched successfully", UserData: rod });
  } catch (error) {
    res.status(500).json({ message: "error occurred", Error: error.message });
  }
};
module.exports = { GetEventbyId };
