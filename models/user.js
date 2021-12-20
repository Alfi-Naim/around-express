const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator: function(v) {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9\._~:\/\?%#\[\]@!$&'()*+,;=]{1,}/.test(v);
      }
    },
    required: true
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  }
});

module.exports = mongoose.model('user', userSchema);