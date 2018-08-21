const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: String,
  section: String,
  url: {
    type: String,
    trim: true
  }
})

const Image = mongoose.model('Image', ImageSchema);

module.exports = { Image };