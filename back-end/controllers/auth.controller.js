const crypto = require('crypto');
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/appError');
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const {createTextEmail} = require("../helpers/createTextEmail");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
    process.env.SECRET_SENDGRID
);

const signToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
        //expiresIn: '1s'
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
    const newUser = await User.create(req.body);
    createSendToken(newUser,201,res); 
})

exports.signIn =  catchAsync(async (req,res,next) => {
    const {email, password} = req.body;
    // CHECK USER AND PASSWORD VALID
    const user = await User.findOne({ email }).select("+password");

    if(!user ) {
        return  next( 
                new AppError('Incorrect email or password',401
           )
        )
    }
    const correct = await user.correctPassword(password, user.password);
    if (!correct) {
        return next(
            new AppError('Incorrect email or password', 401)
        )
    }
    
    
    
    createSendToken(user,200,res);
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

exports.restrictTo = (...roles) => {
    return (req,res,next) => {
        // roles ['admin'] rolesBasic = 'user'

        if(!roles.includes(req.user.role)) {
            return new AppError('You do not have permission to perform this action',401)
        }
        next()
    }
   
}

exports.forgotPassword = catchAsync( async (req,res,next) => {
     // 1) Get user based on POSTED email
    const user = await User.findOne({email: req.body.email});
    if (!user) {
         return next(new AppError('There is no user with email address.',404))
     }
     // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({validateBeforeSave: false});
    //${req.protocol}://${req.get('host')}/api/v1/user/resetPassword/${resetToken}`
    // 3) Send it to user's email
    const resetURL = `${"http://localhost:3000/resetPassword"}/?token=${resetToken}`
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}\n If your didn't forget your password please ignore this email`;
    
    const text = await createTextEmail(user.email , message)
    
    sgMail
        .send(text)
        .catch(async error => {
            if (error.response) {
                user.passwordResetToken = undefined;
                user.passwordResetExpires = undefined;
                await user.save({validateBeforeSave: false});
                return next(new AppError('There was an error sending the email.Try Again later'),500)
            }
        });
    res.status(200).json({
        status: 'success',
        message:'Token send to email!'
    })
})

exports.resetPassword = catchAsync(async (req,res,next) => {
    // 1) Get  user base on the token 
    const hashToken = crypto.createHash('sha256')
                            .update(req.params.token)
                            .digest('hex')
    const user = await User.findOne({passwordResetToken: hashToken, passwordResetExpires: {
        $gt: Date.now()
    }})
    // 2) If token has not expired, and there is user, set the new password 
    if( !user ) {
        return next( new AppError("Token is invalid or has expired",400))
    }
    user.password = req.body.password;
    user.confirmPassword = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    // 3) Update changed Password At property for the currentUser  
    // 4) Log the user in, send JWT
    createSendToken(user,200,res)
})

exports.updatePassword = catchAsync( async (req, res , next) => {
    // 1) Get user from collection 
    
    const user = await User.findById(req.user.id).select('+password')
    // 2) Check if post current password is Correct 
    if(!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
        return next(new AppError('Your current password is wrong',401))
    }
    // 3) if so, update password
    user.password = req.body.password;
    user.confirmPassword = req.body.passwordConfirm;
   
    await user.save() ; 
    
    // 4) Log user in, send JWT 
    createSendToken(user,200,res)

})