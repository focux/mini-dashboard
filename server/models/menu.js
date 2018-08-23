const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  category: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: Number
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = { Menu };