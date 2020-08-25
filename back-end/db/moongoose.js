const mongoose = require('mongoose');
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    userCreateIndex: true, 
    useFindAndModify: false 
  }).then(() => {
    console.log("Database connected successfully")
  });

