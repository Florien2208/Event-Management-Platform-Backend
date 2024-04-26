const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Event", 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", 
  },
  numTickets: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
