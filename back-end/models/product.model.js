const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    idProduct: Number,
    idShop: Number,
    nameEN: String,
    nameVN: String,
    weight: String,
    origin: String,
    priceVN: String,
    priceUSD: String,
    amount: String,
    totalWeight: String,
    totalPriceUSD: String,
    productURL: String,
    photoURL: String,
    isSale : {
        type: Number,
        default: 0
    }
})


const Product  = mongoose.model('product',productSchema,'product');

module.exports = Product;