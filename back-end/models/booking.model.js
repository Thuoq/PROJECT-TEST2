const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    },
    cart: [
        { 
            _id: {
                type: mongoose.Schema.ObjectId,
                ref: 'product',
            },
            key: {
                type: Number,
                required: [true, 'Booking need a Key']
            },
            isGettingProduct : {
                type : Boolean,
                default: false,
            },
            isShippingProduct: {
                type : Boolean,
                default: false,
            },
            isReceivedProduct: {
                type : Boolean,
                default: false,
            },
            quantity: {
                type: Number,
                required: [true, 'Booking need a Quantity']
            } 
        }
    ],
    HAWB: {
        type: String,
    },
    name: {
        type: String,
    },
    phoneNumber : {
        type: Number,
    },
    address: {
        type: String,
        required: [true, "Provide us address"]
    },
    numberPaymentCard : {
        type: String,  
    },
    totalMoney : Number,
    createAt: {
        type: String,
    },
    
},{  
    toJSON: {virtuals: true},
    toObject: {virtuals:true} 
})
bookingSchema.pre(/^find/, function(next) {
   
    this.populate('cart._id').populate({path: 'idUser',select: ['phoneNumber' , 'name']})
    
    next();
});



const Booking = mongoose.model("booking", bookingSchema,'booking')

module.exports  = Booking;

