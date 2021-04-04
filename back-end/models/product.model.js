const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    nameEN: {
        type: String,
        trim: true,
        required: [true, 'Product need a name En']
    },     
    nameVN: {
        type : String,
        trim : true,
        required: [true, 'Product need a name VN']
    },
    weight: {
        type: Number , 
        trim : true, 
        required: [true, 'Product need a weight']
    },
    origin: {
        type: String, 
        trim : true,
        default: "Viet Nam"
    },
    priceVN: {
        type: Number,
        trim: true,
        required : [ true, 'Product need a Price VN'],
    },
    priceUSD:{
        type: Number, 
        trim : true,
        required: [ true, 'Product need a Price USD']
    },
    isImportExcelBooking: {
        type: Boolean,
        default: false
    },
    photoURL: {
        type:String,
        default : 'https://i.postimg.cc/Gm3qNSGQ/photo-1583743814966-8936f5b7be1a.jpg'
    },
    productURL: String,
    stored: {
        type:Number,
        default: 0
    }
    
})


const Product  = mongoose.model('product',productSchema,'product');

module.exports = Product;