const catchAsync  = require('../utils/catchAsync');

const Booking = require('../models/booking.model');
const {sendGridMail} = require('../helpers/sendGridMail');
const APIFeatures = require('../utils/apiFeatures');

exports.createBooking = catchAsync(async (req,res,next) => {
   
    req.body.idUser = req.user._id;
    sendGridMail(req.user.email)
    await Booking.create(req.body);
   
    res.status(200).json({
        status: 'success'
    })
})


exports.getBooking = catchAsync(async (req,res,next) => {
    let features
    
    if( !req.user.role.includes("admin") ) {
        features = new APIFeatures(Booking.find({idUser: req.user._id})).sort()      
    }else { 
        features =  new APIFeatures(Booking.find(),req.query).paginate()
    }   
    const booking = await features.query;
    res.status(200).json({
        status: 'success',
        length : booking.length, 
        data: {
            booking,
        }
    })
})

exports.updateComplete = catchAsync(async (req,res,next) => {
    
    const {key,id,status} = req.body;
    // Change placeholder make true 
    var placeholder = {};
    placeholder[`cart.$.${status}`] = !req.body[status];
    await Booking.updateOne({"_id":id, "cart.key":key},{$set: placeholder},{
        new: true
    })
    
    let booking = await Booking.find()
    res.status(200).json({
        status: 'success',
        length : booking.length, 
        data: {
            booking,
        }
    })
})

exports.stripeHandleInformation = catchAsync(async (req,res,next) => {
    await stripe.charges.create(req.body, function(err,charges) {
        
        if (err) {
			res.json(err)
			return
        }
        res.json(charges)
		return
    })
	
})

exports.handleUploadDataExcel = catchAsync(async (req,res,next) => {
 
    res.status(200).json({
        status:'success'
    })
})


exports.updateCompleteMany = catchAsync(async (req,res,next) => {
   
    const {bookings , status} = req.body;
    var placeholder = {};
       
   
    bookings.forEach(async cart => {
        placeholder[`cart.$.${status}`] = !cart[`${status}`];
        await Booking.updateOne({"_id":cart._id, "cart.key":cart.key},{$set: placeholder},{
            new: true
        })
    })
    
    let booking = await Booking.find()
    
    res.status(200).json({
        status: 'success',
        length : booking.length, 
        data: {
            booking,
        }
    })
    
})