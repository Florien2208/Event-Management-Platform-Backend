const event = require("../../models/eventModal");


const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const rod = await event.findByIdAndDelete({ _id: id });
    if (!rod) {
      return res.status(501).json({ message: "Event not found" });
    }
    res
      .status(201)
      .json({ message: "Event deleted successfully", Event: rod });
  } catch (error) {
    return res.status(500).json({
      message: "error occurred during deleting",
      Error: error.message,
    });
  }
};
module.exports = { deleteEvent };
