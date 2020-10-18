const fs = require('fs');
const Product = require('../models/product.model');
const Booking = require('../models/booking.model');
const moment = require('moment')
const {convertDataExcelToArray} = require('../helpers/handleFileExcel')
const randomInteger = require('../constants/RandomsInteger');
const catchAsync = require('../utils/catchAsync');


exports.handleCreateProductExcel = catchAsync(async (req,res,next ) => {
    const data = convertDataExcelToArray(req);
    const path = `${process.cwd()}/uploads/` + req.file.filename;
    await fs.unlink(path,(err) => {
                if(err) {
                    throw Error("Delete file Sync ")
                }
    }) 
    let promiseBook  =  data.map(async el => {
        const {nameVN , nameEN, quantity, weight,totalWeight,totalMoney,address,phoneNumber,name} = el;
        const productExist = await Product.findOne({
                nameVN,
         }) 
        let product;
        if(!productExist) {
            const priceUSD = totalMoney / quantity;
            const combineProduct  = {
                nameEN,
                nameVN,
                weight,
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
            phoneNumber,
            address,
            totalMoney,
            numberPaymentCard: `${randomInteger(10000000000,999999999999)}`,
            createAt: `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`,
        }
        return Booking.create(combineCart);  
    })
    await Promise.all(promiseBook)
    await next();
})
