const AppError = require("../utils/appError")

exports.isAdmin = (req,res,next) => {
    if(req.user.role !== 'admin') {
        next(new AppError('You do not permission for this action',403))
    }
    next();
}