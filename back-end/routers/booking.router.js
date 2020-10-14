const express = require('express');
const Auth = require('../controllers/auth.controller');
const BookingController = require('../controllers/booking.controller');

const router = express.Router();


router.use(Auth.protect);

router
    .route("/")
    .get(BookingController.getBooking)
    .post(BookingController.createBooking);
router.post('/stripe-information',BookingController.stripeHandleInformation)
    


module.exports = router;
