const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { promisify } = require('util');


const signToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    user.password = undefined;
    user._id = undefined;
    res.cookie('jwt', token, cookieOptions);
    res.status(statusCode).json({
        status: 'success',
        token,
        data: { 
            user,
        }
    })
}


exports.register  = catchAsync(async (req,res,next) => {
    const arrAddress = [
        {
            name : req.body.address
        }
    ]
    req.body.address = arrAddress;

    const newUser = await User.create(req.body);
    createSendToken(newUser,201,res); 
})

exports.signIn =  catchAsync(async (req,res,next) => {
    const {email, password} = req.body;
    

    // CHECK USER AND PASSWORD VALID
    const user = await User.findOne({ email }).select("+password");

    const correct = await user.correctPassword (password, user.password);
    
    if(!user || !correct) {
        return  next( 
                new AppError('Incorrect email or password',401
           )
        )
    }
    
    createSendToken(user,200,res);
})

exports.refresh = catchAsync(async (req,res,next) => {
    const {user} = req;

    res.status(200).json({
        status: "success",
        data: {
            user,
        }
    }) 
})

exports.protect = catchAsync(async (req,res,next) => {
   
    let token; 
    if  (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token  = req.headers.authorization.split(' ')[1];
    } 
    if (!token) { 
        return next(
            new AppError('Your are not logged in! Please log in to get access. ', 401)
        );
    }
    // Verify token 
    const decode = await promisify(jwt.verify)(token,process.env.JWT_SECRET)
    // check user 
    
    const currentUser = await User.findById(decode.id);
    if (!currentUser) {
        return next(
            new AppError(
            'The token belonging to this token does no longer exits',
            401
            )
        );
    }
    // Check user changed password after token issued
    if(currentUser.changedPasswordAfter(decode.iat)) {
        return next(
            new AppError('User recently changed password ! please login again',404)
        );
    }
    req.user = currentUser;
    
    next();
})  