const mongoose = require('mongoose');
const mongodbUrl = process.env.MONGODB_URI || 'mongodb://heroku_p761vc0j:he97s5uuojfs0928eg2ipk8sq1@ds225902.mlab.com:25902/heroku_p761vc0j';
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl, { useNewUrlParser: true });

module.exports = { mongoose };
