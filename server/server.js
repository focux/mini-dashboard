const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const passportSetup = require('./config/passport-setup');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const cors = require('cors');
const cookieSession = require('cookie-session');


app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['secret']
  }));
  
app.use(helmet());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(express.static(publicPath));

/* Routes */

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/booking', bookingRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server up and running in port', PORT);
});