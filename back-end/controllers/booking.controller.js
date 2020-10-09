const catchAsync  = require('../utils/catchAsync');

const Booking = require('../models/booking.model');
const {sendGridMail} = require('../helpers/sendGridMail');

exports.createBooking = catchAsync(async (req,res,next) => {
   
    req.body.idUser = req.user._id;
    sendGridMail(req.user.email)
    await Booking.create(req.body);
   
    res.status(200).json({
        status: 'success'
    })
})


exports.getBooking = catchAsync(async (req,res,next) => {
    let booking;
    
    if( !req.user.role.includes("admin") ) {
        booking =  await Booking.find({idUser: req.user._id})      
    }else {
        booking = await Booking.find()
    }   
  
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
    console.log(b)
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
        placeholder[`cart.$.${status}`] = true;
   
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