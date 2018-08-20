const mongoose = require('mongoose');
const validator = require('validator');

const BookingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true
  },
  telephone: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid e-mail'
    }
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = { Booking };