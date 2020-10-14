const Product = require('../models/product.model');
const Booking = require('../models/booking.model');
const moment = require('moment')
const {convertDataExcelToArray} = require('../helpers/handleFileExcel')
const randomInteger = require('../constants/RandomsInteger');
const catchAsync = require('../utils/catchAsync');

exports.handleCreateProductExcel = catchAsync(async (req,res,next ) => {
    const data = convertDataExcelToArray(req)
    await data.forEach(async el => {
         const {nameVN , nameEN,HAWB, quantity, weight,totalWeight,totalMoney,address,phoneNumber,name} = el;
        const productExist = await Product.findOne({
                nameVN,
         }) 
         
        let product;
        if(!productExist) {
            const priceUSD = (totalMoney/quantity).toFixed(2);
            const combineProduct  = {
                nameEN,
                nameVN,
                weight,
                origin: "Viet Nam",
                totalWeight,
                priceUSD,
                isImportExcelBooking: true,
                priceVN: priceUSD * 230000,
            }
            product = await Product.create(combineProduct);
        }else {
            product = Object.assign({},productExist)
        }
        const newCart = Object.assign({},product._doc,{
            key: new Date().getTime(),
            quantity,
        })
        const combineCart = {
            cart : newCart,
            name,
            HAWB : HAWB.toString(),
            phoneNumber,
            address,
            totalMoney,
            numberPaymentCard: `${randomInteger(10000000000,999999999999)}`,
            createAt: `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`,
        }
        await Booking.create(combineCart);  
    })
    
    next();
})

