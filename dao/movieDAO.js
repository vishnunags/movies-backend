const db = require('../config/db');

const getAllMovies = (callback) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

const getMovieById = (id, callback) => {
    db.query('SELECT * FROM movies WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

module.exports = {
    getAllMovies,
    getMovieById
};
