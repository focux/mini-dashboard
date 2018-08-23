const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const passportSetup = require('./config/passport-setup');
const passport = require('passport');
const apiRoutes = require('./routes');
const PORT = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const cors = require('cors');
const cookieSession = require('cookie-session');
const enforce = require('express-sslify');
const { Menu } = require('./models/menu')

if (process.env.NODE_ENV === 'production') {
    console.log('EN PRODUCTION');
    app.set('trust proxy', 1);
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
  }

app.get('*.js', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
  });
  
  app.get('*.css', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/css');
    next();
  });

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['secret'],
    secure: process.env.NODE_ENV === 'production'
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());



app.use(express.static(publicPath));

app.use('/api/v1', apiRoutes); // Api routes

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server up and running in port', PORT);
});