const express = require('express');
const router = express.Router();
const Auth = require('../controllers/auth.controller');
const UserController = require('../controllers/user.controller');

router.post("/register",Auth.register);
router.post("/signIn", Auth.signIn);
router.get("/profile",Auth.protect,UserController.getProfileUser);
router.post("/address", Auth.protect , UserController.updateAddressUser);

module.exports = router;