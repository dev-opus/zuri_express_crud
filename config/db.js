require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify,
  useCreateIndex,
});

module.exports = connection;
