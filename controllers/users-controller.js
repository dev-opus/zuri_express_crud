const User = require('../models/user-model');

const getUserInfo = async (req, res, next) => {
  const data = await User.findOne({}).lean();

  if (!data) {
    return res.status(400).json({
      status: 'Error',
      message: 'No data',
    });
  }

  res.json({
    message: 'Success',
    data,
  });
};
