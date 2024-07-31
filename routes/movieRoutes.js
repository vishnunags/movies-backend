const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');
const bookingService = require('../services/bookingservice');

router.get('/movies', (req, res) => {
    movieService.getAllMovies((err, movies) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(movies);
    });
});

router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    movieService.getMovieById(id, (err, movie) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(movie);
    });
});

// /routes/movieRoutes.js
router.post('/bookings', (req, res) => {
    const bookingDetails = req.body;
    bookingService.createBooking(bookingDetails, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
    });
});

module.exports = router;
