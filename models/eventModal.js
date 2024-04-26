const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter your title name"],
      unique: true,
    },
    description: {
      type: String,
      
    },
    photo: {
      type: String,
       
    },
    location: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const event = mongoose.model("Events", eventSchema);
module.exports = event;
