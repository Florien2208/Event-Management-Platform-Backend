const event = require("../../models/eventModal");

const getAllEvents = async (req, res) => {
  try {
    const rod = await event.find({});
    res.status(200).json(rod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllEvents };
