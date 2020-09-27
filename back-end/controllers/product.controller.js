const catchAsync = require('../utils/catchAsync');
const Product = require('../models/product.model');
const Booking = require('../models/booking.model');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllProduct = catchAsync(async ( req, res, next) => {
    let features =  new APIFeatures(Product.find({"nameEN": {$regex:req.query.nameEN}}),req.query)
    .sort().limitFields().paginate()
    const products = await features.query;
    res.status(200).json({
        status: 'success',
        length: products.length,
        data: {
            products,
        }
    })
})


exports.getTop4Sale = catchAsync(async (req,res,next) => {

    
    const bestSale = await Booking.aggregate([
        {
            $unwind : '$cart'
        },
        {
            $group : {_id : '$cart._id', quantity: {$sum : "$cart.quantity"}}
        },
        {
            $lookup : {
                from: "product",
                localField: "_id",
                foreignField: "_id",
                as: 'cart'
            }
        },
        {
            $sort: {quantity : -1}
        },
        {
            $limit: 8
        }
    ])
    res.status(200).json({
        status: 'success',
        length: bestSale.length,
        data: {
            products: bestSale
        }
    })
})