const express = require('express');

const router = express.Router();
const Auth = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');

 
router.post('/register', Auth.register);
router.post('/forgotPassword', Auth.forgotPassword);
router.patch('/resetPassword/:token', Auth.resetPassword);
router.patch('/updateMyPassword',Auth.protect, Auth.updatePassword);
router.post('/signIn', Auth.signIn);

router.patch('/address', Auth.protect, UserController.updateAddressUser);
router.patch('/phone', Auth.protect, UserController.updatePhoneUser);

module.exports = router;
