require('dotenv').config();
const app = require('express')();
const stripe = require('stripe')(process.env.SECRET_STRIPE)
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
//const data = require('./data');

// data.map(el => {
//     const pro = new Product(el);
//     pro.save().then(doc => {
//         console.log("SUCCESS")
//     })
// })
// console.log(process.env.NODE_ENV)

const PORT = process.env.PORT || 2222;
 
app.use(cors());
app.options(corsOptions, cors());

// parse application/json
app.use(bodyParser.json());
app.use('/api/v1/product', RouterProduct);
app.use('/api/v1/booking', RouterBooking);
app.use('/api/v1/user', RouterUser);

app.use(globalErrorHandler);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(PORT, () => {
  console.log('Server running at PORT: ', PORT);
});
