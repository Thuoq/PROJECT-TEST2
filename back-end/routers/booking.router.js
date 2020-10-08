const express = require('express');
const Auth = require('../controllers/auth.controller');
const BookingController = require('../controllers/booking.controller');
const MiddlewaresBooking = require('../middlewares/booking.middlewares')
const router = express.Router();
const {upload} = require('../configs/Multer')

router.use(Auth.protect);
router.route("/upload")
        .post( 
            upload.single('file')
            ,MiddlewaresBooking.handleCreateProductExcel
            ,BookingController.handleUploadDataExcel) 
router.route("/update-complete-many")
        .patch(BookingController.updateCompleteMany)
router
    .route("/")
    .patch(BookingController.updateComplete)
    .get(BookingController.getBooking)
    .post(BookingController.createBooking);
router.post('/stripe-information',BookingController.stripeHandleInformation)
    


module.exports = router;
