const express = require('express');
const Auth = require('../controllers/auth.controller');
const {upload} = require('../configs/Multer')
const {handleUploadDataExcel
        ,updateCompleteMany
        ,updateComplete} = require('../controllers/booking.controller');
const {handleCreateProductExcel}  = require('../middlewares/booking.middlewares');
const {getBookingWaybill
        ,getProductAdmin
        ,postProductArray
        ,patchProductContent
        ,patchBookingContent
,getAllUsers,
getOneUser,
editUser,
deleteUser} = require('../controllers/admin.controller')
const {handleProductExcelArray } = require('../middlewares/product.middlewares')
const {isAdmin} = require('../validations/admin.validation');
const router = express.Router();

router.use(Auth.protect);
router.use(isAdmin);

// router.route("/product").get((req,res,next) => {

// })
router
    .route('/upload-booking')
        .post(upload.single('file')
                ,handleCreateProductExcel
                ,handleUploadDataExcel)
router.route('/upload-product') 
        .post(upload.single('file')
        ,handleProductExcelArray
        ,postProductArray
)
 

router.route("/booking")
        .get(getBookingWaybill)
        .patch(patchBookingContent)
router.route("/product")
        .get(getProductAdmin)
        .patch(patchProductContent)
router
    .route('/upload-complete')
    .patch(updateComplete)
router
    .route('/upload-complete-many')
    .patch(updateCompleteMany)
router.route('/users').get(getAllUsers)
router.route('/users/:id')
                .get(getOneUser)
                .patch(editUser)
                .delete(deleteUser)


module.exports = router;