const router = require('express').Router();
const passport = require('passport');
const { User } = require('../models/user')

  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      const errorMessage = 'Hubo un problema al iniciar sesión. Revise sus datos e intente nuevamente';
      if (err || !user) {
        return res.status(400).send({
          error: errorMessage
        });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(400).send({
            error: errorMessage
          });
        }
        return res.send({ user });
      });
    })(req, res, next);
  });

  router.post('/signup', async (req, res) => {
    const errorMessage = 'Hubo un problema al registrarte. Revise sus datos e intente nuevamente';
    const { email, password } = req.body;
    
    if (req.body && password && email) {
      const user = new User({
        email,
        password
      });

      try {
        await user.save();
        return res.status(200).send({ email });
      } catch (e) {
        return res.status(400).send({
          error: errorMessage
        });
      }
    } else {
      return res.status(400).send({
        error: errorMessage
      });
    }
  })

module.exports = router;