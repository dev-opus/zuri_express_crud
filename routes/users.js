const express = require('express');
const router = express.Router();

const { catchAsyncErrors } = require('../utils/errorHandler');
const {
  getUserInfo,
  createUserInfo,
  updateUserInfo,
  deleteUserInfo,
} = require('../controllers/users-controller');

router.get('/', catchAsyncErrors(getUserInfo));

router.post('/', catchAsyncErrors(createUserInfo));

router.put('/:id', catchAsyncErrors(updateUserInfo));

router.delete('/:id', catchAsyncErrors(deleteUserInfo));

module.exports = router;
