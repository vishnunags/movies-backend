const db = require('../config/db');

const createBooking = (bookingDetails, callback) => {
    const { movieId, seatNumber, userName, userEmail } = bookingDetails;
    const sql = 'INSERT INTO bookings (movie_id, seat_number, user_name, user_email) VALUES (?, ?, ?, ?)';
    db.query(sql, [movieId, seatNumber, userName, userEmail], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

module.exports = {
    createBooking
};
