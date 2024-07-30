const movieDAO = require('../dao/movieDAO');

const getAllMovies = (callback) => {
    movieDAO.getAllMovies((err, movies) => {
        if (err) return callback(err);
        callback(null, movies);
    });
};

const getMovieById = (id, callback) => {
    movieDAO.getMovieById(id, (err, movie) => {
        if (err) return callback(err);
        callback(null, movie);
    });
};

module.exports = {
    getAllMovies,
    getMovieById
};
