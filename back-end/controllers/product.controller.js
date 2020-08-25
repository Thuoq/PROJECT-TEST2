const catchAsync = require('../utils/catchAsync');
const Product = require('../models/product.model');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllProduct = catchAsync(async ( req, res, next) => {
    
    let features 
    if(req.query.nameEN) {
        features = new APIFeatures(Product.find({"nameEN": {$regex:req.query.nameEN}}),req.query)
        .sort().limitFields().paginate()
    }else {
        req.query.nameEN = undefined;
        features = new APIFeatures(Product.find(),req.query)
        .filter().sort().limitFields().paginate()
    }
    
    const products = await features.query;
    res.status(200).json({
        status: 'success',
        length: products.length,
        data: {
            products,
        }
    })
})


