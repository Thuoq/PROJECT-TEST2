const catchAsync = require('../utils/catchAsync');
const User = require('../models/user.model');


exports.getProfileUser = catchAsync( async (req,res,next) => {
    console.log(req);
})

exports.updateAddressUser = catchAsync( async (req,res,next) => {
    req.body.name = req.body.address
    req.body.address = undefined;
    const user = await User.findByIdAndUpdate(req.user._id, {
        $push: {address: req.body}
    } , {
        new: true
    })
    res.status(200).json({
        status: 'success',
        data : {
            user,
        }
    })
})