const catchAsyncErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(next);

const handleErrors = (err, res) => {
  const { message } = err.message;
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    statusCode,
    status: 'Server Error',
    message,
  });
};

module.exports = { catchAsyncErrors, handleErrors };
