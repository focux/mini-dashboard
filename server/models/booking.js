const mongoose = require('mongoose');
const validator = require('validator');

const BookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid e-mail'
    }
  },
  persons: {
    type: Number,
    required: true,
    trim: true,
    default: 1
  },
  bookingDate: {
    type: Number,
    required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = { Booking };