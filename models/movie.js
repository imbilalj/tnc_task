const { default: mongoose } = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    releaseYear: Number,
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
