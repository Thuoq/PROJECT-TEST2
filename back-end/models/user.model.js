const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide tell us your name']
    },
    email: {
        type: String,
        required: [true, "Please provide tell us your email"],
        trim: true,
        lowercase: true,
        unique: true,
        validate : [validator.isEmail , 'Please provide a valid email']
    },
    password: {
        type:String,
        required:[true, "Please provide tell us your password "],
        minlength: 8,
        select: false
    },
    role : {
        type: String,
        enum: ['user','admin'],
        default: 'user',
        select: true
    },
    confirmPassword: {
        type:String,
        required: [true,'Please confirm your password'],
        validate: {
            validator(el) {
                return this.password === el
            },
            message: "Passwords are not the same!"
        }
    },
    address:{      
        type: String,
        lowercase : true,
        required : [true,'Please confirm your address'],   
    },
    phoneNumber: {
        type : String,
        required : [true,'Please confirm your phone Number'],
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
    
})

userSchema.pre('save',async function (next) {
    // ONLY run this function if password was actually modified
   if (!this.isModified('password')) return next();
   // HASH PASSWORD WITH COST 12
   this.password = await bcrypt.hash(this.password,12);
   // UNDEFINED CONFIRM PASSWORD
   this.confirmPassword = undefined;
   next();
})

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
   if(this.passwordChangedAt) {
       const changedTimestamp = parseInt(
           this.passwordChangedAt.getTime() / 1000,
           10
       );
       return JWTTimestamp < changedTimestamp
   }
   return false
}

userSchema.methods.correctPassword = async function (candidatePassword,userPassword) {
   return await bcrypt.compare(candidatePassword,userPassword)
}
userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
    // 
    console.log({resetToken},this.passwordResetToken)
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;    

    return resetToken;
}

const User = mongoose.model('users',userSchema,'users');


module.exports = User;