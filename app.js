require('dotenv').config();
const express = require('express');
const app = express();

const { handleErrors } = require('./utils/errorHandler');
const port = process.env.PORT || 3000;

// body parsing middleware section
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes section
app.use('/', require('./routes/index'));
app.use('/user-info', require('./routes/users'));

// handle unrecognised routes gracefully
app.use('*', (req, res) => {
  res.status(404).json({
    statusCode: 404,
    status: `404 not found. cannot ${req.method} ${req.originalUrl} on this API`,
    availableRoutes: [{ index: '/', 'user-info': '/user-info' }],
  });
});

// handle asynchronous/server errors propagated by catchAsyncErrors
app.use((err, req, res, next) => {
  handleErrors(err, res);
});

// fire the server!
app.listen(port, () => console.log(`Server started on port ${port}`));
