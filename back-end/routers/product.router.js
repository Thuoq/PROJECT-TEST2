const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const Auth = require('../controllers/auth.controller');

router.post("/",Auth.protect)
router.get("/get-Top-8-Sales",productController.getTop8Sale)
router.get("/", productController.getAllProduct);
module.exports = router;