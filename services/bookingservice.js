const bookingDAO = require('../dao/bookingDAO');

const createBooking = (bookingDetails, callback) => {
    bookingDAO.createBooking(bookingDetails, (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

module.exports = {
    createBooking
};
