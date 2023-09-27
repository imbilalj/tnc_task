const {
  getMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} = require('../services/movieService');

const getMoviesHandler = async (req, res) => {
  const movies = await getMovies(req.query);

  res.status(200).send(movies);
};

const getMovieHandler = async (req, res) => {
  let movie;

  try {
    const movieId = req.params.id;

    movie = await getMovieById(movieId);
  } catch (error) {
    console.log('error', error);
  }

  if (movie) {
    return res.status(200).send(movie);
  }

  res.status(404).send({ message: 'No movie found' });
};

const addMovieHandler = async (req, res) => {
  const movie = await addMovie(req.body);

  res.status(200).send({ message: 'Movie added successfully', movie });
};

const updateMovieHandler = async (req, res) => {
  const movieId = req.params.id;
  const update = req.body;

  const movie = await updateMovie(movieId, update);

  res.send({ message: 'Movie updated successfully', movie });
};

const deleteMovieHandler = async (req, res) => {
  const movieId = req.params.id;

  await deleteMovie(movieId);

  res.send({ message: 'Movie deleted successfully' });
};

module.exports = {
  getMovieHandler,
  getMoviesHandler,
  addMovieHandler,
  updateMovieHandler,
  deleteMovieHandler,
};
