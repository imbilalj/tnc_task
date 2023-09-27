const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleAuthMiddleware = require('../middlewares/roleAuthMiddleware');
const {
  getMoviesHandler,
  getMovieHandler,
  addMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
} = require('../controllers/movieController');

const router = express.Router();

router.get('/', getMoviesHandler);

router.get('/:id', getMovieHandler);

router.post(
  '/',
  [authMiddleware, roleAuthMiddleware(['admin'])],
  addMovieHandler
);

router.put(
  '/:id',
  [authMiddleware, roleAuthMiddleware(['admin'])],
  updateMovieHandler
);

router.delete(
  '/:id',
  [authMiddleware, roleAuthMiddleware(['admin'])],
  deleteMovieHandler
);

module.exports = router;
