const connection = require('../config/db');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
});

const UserModel = connection.model('UserInfo', UserSchema);

module.exports = UserModel;
