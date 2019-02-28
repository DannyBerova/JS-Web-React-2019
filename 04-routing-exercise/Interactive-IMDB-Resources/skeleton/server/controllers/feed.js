const { validationResult } = require('express-validator/check');
const Movie = require('../models/Movie');

function validateMovie(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({
      message: 'Validation failed, entered data is incorrect',
      errors: errors.array()
    });
    return false;
  }

  return true;
}

module.exports = {
  getMovies: (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res
          .status(200)
          .json({ message: 'Fetched movies successfully.', movies });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },
  createMovie: (req, res, next) => {
    if (validateMovie(req, res)) {
    const movieObj = req.body;
    Movie.create(movieObj)
    .then((movie) => {
      res.status(200)
        .json({
          message: 'Movie created successfully!',
          movie
        })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
  }
}
}