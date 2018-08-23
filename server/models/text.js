const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  section: {
    type: String,
    trim: true
  },
  identifier: {
    type: String,
    trim: true
  },
  text: {
    type: String,
    trim: true
  }
});

const Text = mongoose.model('Text', TextSchema);

module.exports = { Text };