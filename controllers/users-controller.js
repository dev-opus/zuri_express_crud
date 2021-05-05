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
  const {id} = req.params,

  // users can only update their names and emails
  const { name, email} = req.body

  const data = await User.findOneAndUpdate({_id: id}, {name, email}).lean()

  // id was wrong
  if (!data) {
    return res.status(400).json({
      status: 'Error',
      message: 'Wrong id, please check id and try again'
    })
  }

  return res.json({
    message: 'User data updated successfully',
    data
  })
}