const AppError = require('../utils/appError');
const handleUploadBookingError = () => new AppError('Upload booking failure Column missing in .xlsx file',404)
const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please login again', 401);

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  
  const message = `Invalid input data.${errors.join('.  ')}`;
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = err => {

  const value = err.keyValue.email; 
  const message = `Duplicate field value: ${value}. Please use another value!!`;
  return new AppError(message, 400);    
};

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path} : ${err.value}. `;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  }); 
};
const sendErrorProd = (err, res) => {
  // Operational , trusted error: send message to client
  if (err.isOperational) {
    
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
    // Programming or other unknown error: don't  leak details
  } else {
    
    res.status(500).json({
      status: 'error',
      message: 'Some thing went very wrong'
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {

    let error = { ...err };
    error.message = err.message;
    if (err.name === 'CastError') {
      error = handleCastErrorDB(error);
    } 
    if (err.code === 11000) {
     
      error = handleDuplicateFieldsDB(error);
    }
    if (err.name === 'ValidationError') {
      error = handleValidationErrorDB(error);
    }
    if (err.name === 'JsonWebTokenError') {
      error = handleJWTError();
    }
    if (err.name === 'TokenExpiredError') {
      error = handleJWTExpiredError();
    }
    if(err.name === 'ERR_ASSERTION') {
      error = handleUploadBookingError()
    }
    sendErrorProd(error, res);
  }
}