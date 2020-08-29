require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
// SERVER
require('./db/moongoose');

const Product = require('./models/product.model');

// ROUTER AND CONTROLLER AND MIDDLEWARE
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');
const RouterUser = require("./routers/user.router");
const RouterBooking = require('./routers/booking.router');
const RouterProduct = require('./routers/product.router');
const data = require('./data');


// data.map(el => {
//     const pro = new Product(el);
//     pro.save().then(doc => {
//         console.log("SUCCESS")
//     })
// })

const PORT = process.env.PORT || 2222;


app.use(cors())
app.options('*', cors())

// parse application/json
app.use(bodyParser.json())
app.use("/product",RouterProduct)
app.use("/booking",RouterBooking)
app.use("/user",RouterUser)

app.use(globalErrorHandler);

app.all('*', (req, res, next) => {

    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
  

app.listen(PORT, () => {
    console.log("Server running at PORT: ",PORT)
})