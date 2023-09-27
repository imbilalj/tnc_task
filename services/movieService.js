const Movie = require('../models/movie');

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);

  return movie;
};

const getMovies = async ({
  page = 1,
  perPage = 10,
  sortBy = 'createAt',
  sortOrder = -1,
}) => {
  const sort = {};
  sort[sortBy] = sortOrder;
  const movies = await Movie.find({})
    .sort(sort)
    .skip(perPage * (page - 1))
    .limit(perPage);

  return movies;
};

const addMovie = async (movie) => {
  let newMovie = new Movie(movie);

  newMovie = await newMovie.save();

  return newMovie;
};

const updateMovie = async (id, update) => {
  const movie = await Movie.findByIdAndUpdate(
    id,
    { $set: update },
    { new: true }
  );

  return movie;
};

const deleteMovie = async (id) => {
  await Movie.deleteOne({ _id: id });
};

module.exports = {
  getMovieById,
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
