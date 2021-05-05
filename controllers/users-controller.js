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

const updateUserInfo = async (req, res, next) => {
  const { id } = req.params;

  // users can only update their names and emails
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: 'Error',
      message:
        'could not update due to empty name or email, please populate name and/or email',
    });
  }

  const data = await User.findOneAndUpdate({ _id: id }, { name, email }).lean();

  // id was wrong
  if (!data) {
    return res.status(400).json({
      status: 'Error',
      message:
        'could not update due to wrong id, please check id and try again',
    });
  }

  return res.json({
    message: 'User data updated successfully',
    data,
  });
};

const deleteUserInfo = async (req, res, next) => {
  const { id } = req.params;

  const data = await User.findOneAndDelete({ _id: id }).lean();

  // id was wrong
  if (!data) {
    return res.status(400).json({
      status: 'Error',
      message:
        'could not delete due to wrong id, please check id and try again',
    });
  }

  res.json({
    message: 'User data deleted successully',
    data,
  });
};

module.exports = {
  getUserInfo,
  createUserInfo,
  updateUserInfo,
  deleteUserInfo,
};
