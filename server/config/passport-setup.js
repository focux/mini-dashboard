const passport = require('passport');
const { User } = require('../models/user');
const LocalStrategy = require('passport-local');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await User.findById(id);
  if (currentUser) {
    done(null, currentUser);
  }
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      console.log('aqui user', user)
      verifyPassword = await user.verifyPassword(password);
      if (!verifyPassword) { return done(null, false); }
      return done(null, user);
    } catch (e) {
      done(null, false);
    }
  }
));