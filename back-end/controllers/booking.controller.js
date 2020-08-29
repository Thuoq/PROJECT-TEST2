const catchAsync  = require('../utils/catchAsync');
const Booking = require('../models/booking.model');

exports.createBooking = catchAsync(async (req,res,next) => {
    req.body.idUser = req.user._id;
    await Booking.create(req.body);
    res.status(200).json({
        status: 'success'
    })
})


exports.getBooking = catchAsync(async (req,res,next) => {
    let booking;
    if( !req.user.roles.includes("admin") ) {
        booking =  await Booking.find({idUser: req.user._id})
                        .populate('cart._id')
                        .populate({path: 'idUser',select: ['phoneNumber' , 'name']})
                        
                 
    }else {
        booking = await Booking.find().populate('cart._id')
        .populate({path: 'idUser',select: ['phoneNumber' , 'name']})
        
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
    
    const {key,id} = req.body;
     await Booking.update({"_id":id, "cart.key":key},{$set: {"cart.$.isCompleted":true}},{
        new: true
    })
    booking = await Booking.find().populate('cart._id')
        .populate({path: 'idUser',select: ['phoneNumber' , 'name']})
    res.status(200).json({
        status: 'success',
        length : booking.length, 
        data: {
            booking,
        }
    })
})

