const event = require("../../models/eventModal");

const addEvent = async (req, res) => {
  try {
    const { title } = req.body;
    const exist = await event.findOne({ title });
    if (exist) {
      return res.status(400).json({ message: `Event  already registered ` });
    }
    const NewEvent = await event.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      photo: req.body.photo,
    });

    res
      .status(200)
      .json({ message: "Event created successfully", Event: NewEvent });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", Error: error.message });
  }
};

module.exports = {
  addEvent,
};
