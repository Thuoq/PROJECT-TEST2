
const Booking = require('../models/booking.model');
const catchAsync = require('../utils/catchAsync');
const Product = require('../models/product.model');
const APIFeatures = require('../utils/apiFeatures');




exports.getBookingWaybill = catchAsync( async (req,res,next) => {
    let booking ;
    if(req.query.hwb) {
        booking = await Booking.find({"HAWB": {$regex: req.query.hwb}})
    } else {
        booking = await Booking.find({idUser: {$exists: false}})
    }
    res.status(200).json({
        status: "success",
        booking,
    })
})

exports.getProductAdmin = catchAsync( async (req,res,next) => {
    req.query.limit = 1000;
    const features = new APIFeatures(Product
        .find
            ({nameEN: { $regex: req.query.nameEN}})
        ,req.query)
    const product = await features.query
    res.status(200).json({
        status: "success",
        length: product.length,
        product,
    })
})


exports.postProductArray = (req,res,next) => {
    res.status(200).json({
        status: "success"
    })
}

exports.patchProductContent  = catchAsync(async (req,res,next) => {
     await Product.findByIdAndUpdate(req.body._id,req.body,{
        new:true
    })
    res.status(200).json({
        status: 'success',
    })
})

exports.patchBookingContent = catchAsync(async (req,res,next) => {
 
    var placeholder = Object.assign(
        {},
        req.body)
        placeholder[`cart.$.quantity`] = req.body.quantity
        
    await Booking
        .updateOne(
        {   "_id":req.body._id,
            "cart.key":req.body.key
        }
        ,{$set: placeholder},{
            new:true
        }) 
    res.status(200).json({
        status: 'success', 
    })
})