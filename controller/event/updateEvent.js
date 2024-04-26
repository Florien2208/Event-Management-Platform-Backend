const event = require("../../models/eventModal");

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const rodi = await event.findByIdAndUpdate(id, req.body);
    if (!rodi) {
      return res
        .status(404)
        .json({ message: `can not find  any event with ${id}` });
    }
    console.log(rodi);
    res.status(200).json(rodi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { updateEvent };
