const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    
    
    nameEN: String,
    nameVN: String,
    weight: Number,
    origin: String,
    priceVN: Number,
    priceUSD: Number,
    isImportExcelBooking: {
        type: Boolean,
        default: false
    },
    totalWeight: Number,
    totalPriceUSD: Number,
    photoURL: {
        type:String,
        default : 'https://i.postimg.cc/Gm3qNSGQ/photo-1583743814966-8936f5b7be1a.jpg'
    },
    productURL: String,
    
})


const Product  = mongoose.model('product',productSchema,'product');

module.exports = Product;