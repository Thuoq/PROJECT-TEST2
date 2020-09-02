const express = require('express');

const router = express.Router();
const Auth = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');

router.get('/session', Auth.protect, UserController.sessionUser);
router.post('/register', Auth.register);
router.post('/signIn', Auth.signIn);
router.get('/profile', Auth.protect, UserController.getProfileUser);
router.post('/address', Auth.protect, UserController.updateAddressUser);
router.patch('/phone', Auth.protect, UserController.updatePhoneUser);

module.exports = router;
