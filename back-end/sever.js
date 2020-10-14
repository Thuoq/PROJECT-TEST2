require('dotenv').config();
process.on('uncaughtException', err => {
  console.log('UncaughtException! SHUT DOWN NOW ...');
  console.log(err.name,err.message);
  process.exit(1)
 
})
const app = require('express')();

const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');
const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};
// SERVER 
require('./db/moongoose');

//const Product = require('./models/product.model');
 
// ROUTER AND CONTROLLER AND MIDDLEWARE
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');
const RouterUser = require('./routers/user.router');
const RouterBooking = require('./routers/booking.router');
const RouterProduct = require('./routers/product.router');
const RouterAdmin = require('./routers/admin.router');
// UP DATE ALL COLLECTION DATA
// async function updateCollection () {
//   await Product.updateMany({}, {$set: {isImportExcelBooking: false}});

// }
// updateCollection()
//const data = require('./data');

// data.map(el => {
//     const pro = new Product(el);
//     pro.save().then(doc => {
//         console.log("SUCCESS")
//     })
// })
// console.log(process.env.NODE_ENV)
// const multer = require('multer')


const PORT = process.env.PORT || 2222;
 
app.use(cors());
app.options(corsOptions, cors());

// parse application/json
app.use(bodyParser.json());
app.use('/api/v1/product', RouterProduct);
app.use('/api/v1/booking', RouterBooking);
app.use('/api/v1/user', RouterUser);
app.use('/api/v1/admin',RouterAdmin);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


const server = app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});

process.on('unhandledRejection',err => {
  console.log('UnhandledRejection SHUT DOWN NOW ...');
  console.log(err.name,err.message);
  server.close(() => {
    process.exit(1)
  })
}) 


