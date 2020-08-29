const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');



router.get("/get-Top-4-Sales",productController.getTop4Sale)
router.get("/", productController.getAllProduct);
module.exports = router;