module.exports.getIndex = (req, res) => {
  res.json({
    status: 'Success',
    message: 'Welcome to the index reource',
    mainResource: { 'user-info': '/user-info' },
  });
};
