const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    idProduct: Number,
    idShop: Number,
    nameEN: String,
    nameVN: String,
    weight: Number,
    origin: String,
    priceVN: Number,
    priceUSD: Number,
    amount: Number,
    totalWeight: Number,
    totalPriceUSD: Number,
    productURL: String,
    photoURL: String,
    
})


const Product  = mongoose.model('product',productSchema,'product');

module.exports = Product;