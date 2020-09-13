const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: [true, 'Booking must belong to a User'],
    },
    cart: [
        { 
            _id: {
                type: mongoose.Schema.ObjectId,
                ref: 'product',
            },
            key: {
                type: Number
            },
            isCompleted : {
                type : Boolean,
                default: false,
            },
            quantity: Number 
            
        }
    ],
    address: {
        type: String,
        required: [true, "Provide us address"]
    },
    totalMoney : Number,
    createAt: {
        type: String,
       
    },
    
})
bookingSchema.pre(/^find/, function(next) {
    this.populate('cart._id').populate({path: 'idUser',select: ['phoneNumber' , 'name']})
    next();
});



const Booking = mongoose.model("booking", bookingSchema,'booking')

module.exports  = Booking;

