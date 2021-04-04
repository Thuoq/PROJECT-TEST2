const { convertDataExcelToArray } = require("../helpers/handleFileExcel")
const fs = require('fs');
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Product = require("../models/product.model");

exports.handleProductExcelArray =  catchAsync(async (req,res,next) => {
    console.log('hello')
    const data = convertDataExcelToArray(req);

    const path = `${process.cwd()}/uploads/` + req.file.filename;
    await fs.unlink(path,(err) => {
        if(err) {
            next( AppError("Delete file wrong "))
        }
    })
    const promiseProduct = data.map( async  el => {
        const productExist = await Product.findOne({
            nameVN : el.nameVN,
            nameEN : el.nameEN
        })
        if(!productExist) {

            return  Product.create(el)
        } 
       
    })
    await Promise.all(promiseProduct)
    next();   
})