const router = require('express').Router();
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
//const isAuth = require('../middleware/is-auth');
//const Movie = require('../models/Movie');


router.get('/movies', feedController.getMovies);
router.post('/movie/create', 
  [
    body('trailerUrl')
      .isURL()
      .withMessage('Please enter a valid url.'),
    body('poster')
      .isURL()
      .withMessage('Please enter a valid url.'),
    body('title')
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage('Title must be at least 3 symbols long.'),
    body('storyLine')
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 5 })
      .withMessage('Story Line must be at least 5 symbols long.')
  ]
,feedController.createMovie);

module.exports = router;