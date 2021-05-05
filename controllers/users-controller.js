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

const createUserInfo = async (req, res, next) => {
  const { name, email, country } = req.body;

  const data = await User.create({
    name,
    email,
    country,
  });

  res.status(201).json({
    message: 'User data created',
    data,
  });
};
