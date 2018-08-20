const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid e-mail'
    }
  },
  password: {
    type: String,
    minlength: 6
  }
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10).then((salt) => {
        return bcrypt.hash(user.password, salt);
    }).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    }).catch(() => next());
} else {
next();
}
});

UserSchema.methods.verifyPassword = async function (password) {
  const user = this;
  try {
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    return isPasswordEqual
  } catch (e) {
    return false
  }
};

const User = mongoose.model('User', UserSchema);

module.exports = { User };